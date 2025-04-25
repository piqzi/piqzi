import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { Darker_Grotesque } from "next/font/google";
import "./globals.css";

const chivo = Darker_Grotesque({
  display: "auto",
  style: "normal",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: profile.name,
  description: profile.bio,
  icons: {
    icon: profile.avatar,
  },
  openGraph: {
    title: profile.name,
    description: profile.bio,
    type: "profile",
    images: [profile.avatar],
    url: profile.web,
    siteName: profile.username,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.className} antialiased selection:bg-neutral-800 selection:text-orange-500`}>
        {children}
      </body>
    </html>
  );
}
