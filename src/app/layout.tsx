import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/navbar/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://plugndd.com"),
  title:
    "PLUGNDD Market Intelligence | Indonesia's End-to-End Insights Partner",
  description:
    "PLUGNDD reads culture, behavior, and market signals to deliver actionable intelligence so your team can win the market.",
  keywords: [
    "market intelligence",
    "consumer insights",
    "cultural trends",
    "Indonesia market",
    "brand strategy",
    "go-to-market",
    "business research",
    "competitive analysis",
    "PLUGNDD",
  ],
  authors: [{ name: "PLUGNDD" }],
  creator: "PLUGNDD",
  publisher: "PLUGNDD",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "PLUGNDD Market Intelligence | Indonesia's End-to-End Insights Partner",
    description:
      "PLUGNDD reads culture, behavior, and market signals to deliver actionable intelligence so your team can win the market.",
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: "PLUGNDD",
    images: [
      {
        url: "/home-page/market-intelligence.png",
        width: 1200,
        height: 630,
        alt: "PLUGNDD market intelligence hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "PLUGNDD Market Intelligence | Indonesia's End-to-End Insights Partner",
    description:
      "PLUGNDD reads culture, behavior, and market signals to deliver actionable intelligence so your team can win the market.",
    creator: "@plugndd",
    images: ["/home-page/market-intelligence.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased overflow-x-hidden`}>
        <Navbar />
        <main>{children}</main>
        <Navbar />
      </body>
    </html>
  );
}
