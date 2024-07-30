import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { env } from "../env";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

const calFont = localFont({
  src: "../styles/CalSans-SemiBold.woff2",
  variable: "--font-cal",
  preload: true,
  display: "swap",
});

const title = "ideahub | connect, collaborate, and create solutions.";
const description =
  "IdeaHub is a dynamic platform that connects innovators with collaborators to turn ideas into reality. Whether you have a concept to validate, need a team to bring your vision to life, or simply want to contribute your skills to exciting projects, IdeaHub is your go-to space for innovation and teamwork. Discover, collaborate, and transform ideas with a supportive community of like-minded individuals.";

export const metadata: Metadata = {
  title: title,
  description: description,
  openGraph: {
    title,
    description,
    siteName: "ideahub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@Patilpranit3112",
  },
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  robots: {
    index: true,
    follow: true,
  },
  applicationName: "ideahub",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "ideahub",
  },
  formatDetection: {
    telephone: false,
  },
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "white-translucent",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`h-full ${inter.variable} ${calFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
