import type { Metadata } from "next";
import "./globals.css";
import AppProvider from "@/context/AppContext";

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
      <AppProvider>
        <body>{children}</body>
      </AppProvider>
    </html>
  );
}
