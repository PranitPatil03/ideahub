import type { Metadata } from "next";
import Features from "../../app/(landing)/home/Features";
import { Hero } from "../../app/(landing)/home/Hero";
import { BasicLayout } from "../../components/layout/BasicLayout";
import { Testimonials } from "../../app/(landing)/home/Testimonials";
import FAQs from "./home/FAQs";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <BasicLayout>
      <Hero />
      <Features />
      <Testimonials />
      <FAQs />
    </BasicLayout>
  );
}
