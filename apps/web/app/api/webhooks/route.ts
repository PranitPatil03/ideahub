import { Webhook } from "svix";
import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@repo/database/src/client";
import { WebhookEvent } from "@clerk/nextjs/server";
import {
  createUser,
  deleteUser,
  updateUser,
  UserData,
} from "../../../utils/user";

export async function POST(req: Request) {
  console.log("Webhook received");

  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    console.error("WEBHOOK_SECRET is not set");
    return NextResponse.json(
      { error: "Server configuration error" },
      { status: 500 },
    );
  }

  console.log("Database URL:", process.env.DATABASE_URL);

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    console.error("Missing svix headers:", {
      svix_id,
      svix_timestamp,
      svix_signature,
    });
    return NextResponse.json(
      { error: "Error occurred -- no svix headers" },
      { status: 400 },
    );
  }

  let payload;
  try {
    payload = await req.json();
  } catch (err) {
    console.error("Error parsing request body:", err);
    return NextResponse.json(
      { error: "Error parsing request body" },
      { status: 400 },
    );
  }

  const body = JSON.stringify(payload);

  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return NextResponse.json(
      { error: "Error verifying webhook" },
      { status: 400 },
    );
  }

  const { id: clerkUserId } = evt.data;
  const eventType = evt.type;

  console.log(
    `Processing webhook: Type ${eventType}, Clerk User ID: ${clerkUserId}`,
  );

  try {
    await prisma.$connect();
    console.log("Database connection successful");

    if (!clerkUserId) {
      return;
    }

    switch (eventType) {
      case "user.created": {
        const {
          id: clerkUserId,
          first_name,
          last_name,
          email_addresses,
          image_url,
        } = evt.data;

        if (!email_addresses) {
          console.error("Error in getting email address:");
          return NextResponse.json(
            { error: "Error Fetching User Data" },
            { status: 400 },
          );
        }

        const user: UserData = {
          clerkUserId,
          firstName: first_name,
          lastName: last_name,
          email: email_addresses[0]?.email_address,
          emailVerified: email_addresses[0]?.verification?.status,
          imageUrl: image_url,
        };

        await createUser(user);
        break;
      }
      case "user.updated": {
        const {
          id: clerkUserId,
          first_name,
          last_name,
          email_addresses,
          image_url,
        } = evt.data;

        if (!email_addresses) {
          console.error("Error in getting email address:");
          return NextResponse.json(
            { error: "Error Fetching User Data" },
            { status: 400 },
          );
        }

        const user: UserData = {
          clerkUserId,
          firstName: first_name,
          lastName: last_name,
          email: email_addresses[0]?.email_address,
          emailVerified: email_addresses[0]?.verification?.status,
          imageUrl: image_url,
        };
        await updateUser(user);
        break;
      }
      case "user.deleted":
        await deleteUser(clerkUserId);
        break;
      default:
        console.log(`Unhandled webhook event type: ${eventType}`);
    }

    return NextResponse.json(
      { message: "Webhook processed successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Error processing webhook" },
      { status: 500 },
    );
  } finally {
    await prisma.$disconnect();
  }
}
