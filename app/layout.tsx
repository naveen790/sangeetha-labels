import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
