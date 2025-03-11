import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AdminProvider from "@/context/admin_context";
import LayoutWrapper from "@/components/LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankit Mishra | Full Stack Developer",
  description: "Portfolio of Ankit Mishra, a Full Stack Developer specializing in backend development and modern web technologies.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AdminProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </AdminProvider>
      </body>
    </html>
  );
}
