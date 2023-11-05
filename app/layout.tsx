import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.woff",

      weight: "bold",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.woff",
      weight: "normal",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jagrath.vercel.app/"),
  title: "Jagrath Shetty - Portfolio",
  description: "LXIX",
  openGraph: {
    title: "Jagrath Shetty - Portfolio",
    description: "Frontend Development Portfolio",
    images: "@/public/images/openGraph/opengraph-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    description: "Frontend Development Portfolio",
    images: "@/public/images/openGraph/opengraph-image.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={satoshi.className}>{children}</body>
    </html>
  );
}
