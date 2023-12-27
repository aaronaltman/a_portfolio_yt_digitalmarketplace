import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Container from "@/components/global/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <h2>Footer</h2>
      </body>
    </html>
  );
}
