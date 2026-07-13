import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const cormorant = localFont({
  src: "./fonts/cormorant-garamond-latin.woff2",
  weight: "400 600",
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sangeetha Labels | Premium Custom Clothing Labels",
  description: "Premium woven labels, printed labels, heat transfers, hang tags, and garment trims.",
  icons: {
    icon: "/icons/favicon-32x32.png",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>{children}</body>
    </html>
  );
}
