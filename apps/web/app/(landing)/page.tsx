import type { Metadata } from "next";
import Features from "../../app/(landing)/home/Features";
import { Hero } from "../../app/(landing)/home/Hero";
import { BasicLayout } from "../../components/layout/BasicLayout";
import { Testimonials } from "../../app/(landing)/home/Testimonials";
import FAQs from "./home/FAQs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {

  const { userId } = auth();

  if (userId) {
    redirect("/dashboard")
  }

  return (
    <BasicLayout>
      <Hero />
      <Features />
      <Testimonials />
      <FAQs />
    </BasicLayout>
  );
}
