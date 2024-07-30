import type { Metadata } from "next";
import {
  Features,
  FeaturesUnsubscribe,
  FeaturesAutomation,
  FeaturesColdEmailBlocker,
  FeaturesStats,
} from "../../app/(landing)/home/Features";
import { FAQs } from "../../app/(landing)/home/FAQs";
import { Hero } from "../../app/(landing)/home/Hero";
import { BasicLayout } from "../../components/layout/BasicLayout";
import { Testimonials } from "../../app/(landing)/home/Testimonials";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <BasicLayout>
      <Hero />
      <Testimonials />
      <Features />
      <FeaturesAutomation />
      <FeaturesUnsubscribe />
      <FeaturesColdEmailBlocker />
      <FeaturesStats />
      <FAQs />
    </BasicLayout>
  );
}
