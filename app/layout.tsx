import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppProviders from "@/provider/provider";
import HeaderFooterWrapper from "@/component/headerWrapper";
import { ShoppingCartProvider} from "@/provider/shoppingCartProvider";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cross-trail-frontend.vercel.app/"), 
  title: {
    default: "CrossTrail – Hiking, Events & Outdoor Gear",
    template: "%s - CrossTrail",
  },

  description:
    "CrossTrail is an all-in-one outdoor platform for hiking, trail exploration, group activities, and performance gear. Discover routes, join events, and shop outdoor essentials.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppProviders>
       
        <HeaderFooterWrapper>
          <main className="grow flex flex-col">{children}</main>
        </HeaderFooterWrapper>
        </AppProviders>
      </body>
    </html>
  );
}
