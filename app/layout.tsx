"use client";

import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import NavBar from "@/components/NavBar";
import "./globals.css";
import localFont from "next/font/local";
import Hero from "@/components/Home/Hero";
import ProductCard from "@/components/Home/ProductCard";

// Custom font definitions
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body suppressHydrationWarning className="relative">
          <SignedOut>
            <NavBar />
          <main>{children}</main>
          </SignedOut>
          <SignedIn>
            <NavBar />
            <main>{children}</main>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}