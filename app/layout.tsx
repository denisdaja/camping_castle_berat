import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camping Castle Berat",
  description:
    "Experience nature under the shadow of Berat Castle. A unique camping retreat in the heart of Albania's City of a Thousand Windows.",
  icons: {
    icon: "/images/logo_camping (2).webp",
    apple: "/images/logo_camping (2).webp",
  },
  verification: {
    google: "DC9yxW1BtHR1UTCTyh9HZSmvTMlMSPI5UROHLZJjwVw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
