import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const hackerNewsMenu = [
  { text: "New", href: "/new" },
  { text: "Past", href: "/past" },
  { text: "Comments", href: "/comments" },
  { text: "Ask", href: "/ask" },
  { text: "Show", href: "/show" },
  { text: "Jobs", href: "/jobs" },
  { text: "Submit", href: "/submit" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="container mx-auto max-w-screen-lg bg-[#f6f6ef]">
          <nav className="flex bg-orange-400 p-2 px-4">
            <Link className="font-bold mr-2" href={"/"}>Hacker News</Link>
            {hackerNewsMenu.map(item => (
              <Link href={item.href} className="mr-2">{item.text}</Link>
            ))}
            <div className="ml-auto">
              <Link href={"/login"}>Login</Link>
            </div>
          </nav>
          <div className="p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
