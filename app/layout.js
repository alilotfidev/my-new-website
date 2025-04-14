import localFont from "next/font/local";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import LenisProvider from "@/components/animation/LenisProvider";

const altform = localFont({
  src: [
    {
      path: "../public/fonts/altform-extrathin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/altform-thin.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/altform-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/altform-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/altform-semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/altform-bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/altform-black.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

// app/page.tsx or app/page.js

export const metadata = {
  title: "Ali – Front-End Developer | Crafting Modern Web Experiences",
  description:
    "I'm a passionate front-end developer building responsive, user-friendly websites using React, Next.js, and Tailwind CSS.",
  keywords: [
    "Front-end developer",
    "Web developer",
    "React developer",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "UI/UX",
    "responsive design",
  ],
  authors: [{ name: "Ali" }],
  creator: "Ali",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "Ali Lotfi – Front-End Developer",
    description:
      "Crafting clean, responsive, and modern web experiences with cutting-edge tools.",
    url: "https://alilotfi.vercel.app",
    siteName: "Ali Portfolio",
    images: [
      {
        url: "https://alilotfi.vercel.app/og-image.jpg",
        width: 1080,
        height: 539,
        alt: "Ali Lotfi – Front-End Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Lotfi – Front-End Developer",
    description: "Creating modern, performant, and beautiful websites.",
    images: ["https://alilotfi.vercel.app/og-image.jpg"],
    creator: "@alilotfidev",
  },
  metadataBase: new URL("https://alilotfi.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${altform.className} bg-white overflow-x-hidden`}>
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
          <LoadingScreen />
        </LenisProvider>
      </body>
    </html>
  );
}
