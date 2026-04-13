import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMART FHIR Launchpad",
  description: "Standalone SMART on FHIR app for launching, authenticating, and reviewing patient context.",
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
