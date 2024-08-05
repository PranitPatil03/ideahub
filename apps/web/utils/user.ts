import { prisma } from "@repo/database/src/client";

export interface UserData {
  clerkUserId: string;
  firstName: string | null;
  lastName: string | null;
  email: string | undefined;
  emailVerified: string | undefined;
  imageUrl: string;
}

export async function createUser(userData: UserData) {
  try {
    await prisma.user.create({
      data: {
        clerkUserId: userData.clerkUserId,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        emailVerified: userData.emailVerified,
        imageUrl: userData.imageUrl,
      },
    });
    console.log(`User created with Clerk ID: ${userData.clerkUserId}`);
  } catch (error) {
    console.error(
      `Error creating user with Clerk ID: ${userData.clerkUserId}`,
      error,
    );
    throw error;
  }
}

export async function updateUser(userData: UserData) {
  try {
    await prisma.user.update({
      where: { clerkUserId: userData.clerkUserId },
      data: {
        clerkUserId: userData.clerkUserId,
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        emailVerified: userData.emailVerified,
        imageUrl: userData.imageUrl,
      },
    });
    console.log(`User updated with Clerk ID: ${userData.clerkUserId}`);
  } catch (error) {
    console.error(
      `Error updating user with Clerk ID: ${userData.clerkUserId}`,
      error,
    );
    throw error;
  }
}

export async function deleteUser(clerkUserId: string) {
  try {
    await prisma.user.delete({
      where: { clerkUserId },
    });
    console.log(`User deleted with Clerk ID: ${clerkUserId}`);
  } catch (error) {
    console.error(`Error deleting user with Clerk ID: ${clerkUserId}`, error);
    throw error;
  }
}
