import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Footer, Header } from "@/components/ui/shared";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "San Brandon",
  description: "Página web de San Brandon",
};

export default function WebSiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
