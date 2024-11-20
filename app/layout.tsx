import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WhatBytes",
  description: "Frontend assignment for whatbytes",
  icons: {
    icon: "./logo.svg",
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
