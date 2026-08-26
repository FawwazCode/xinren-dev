import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xinren Dev",
  description:
    "Modern websites crafted for businesses, brands, and ambitious ideas.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "Xinren Dev",
    description:
      "Modern websites crafted for businesses, brands, and ambitious ideas.",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Xinren Dev",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Xinren Dev",
    description:
      "Modern websites crafted for businesses, brands, and ambitious ideas.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}