import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Listener",
  description: "Atmospheric portrait of The Listener in a rain-soaked street.",
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
