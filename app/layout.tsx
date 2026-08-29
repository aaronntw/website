import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Ng — Network Security Engineer & Technology Builder",
  description: "The personal website of Aaron Ng: network security engineer, enterprise architect and hands-on technology builder based in Malaysia.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
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
