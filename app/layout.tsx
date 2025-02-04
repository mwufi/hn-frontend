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
  { text: "Most Discussed", href: "/best" },
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
      <body className="font-sans">
        <div className="container mx-auto bg-[#f6f6ef] pt-2">
          <nav className="flex bg-orange-400 p-1">
            <Link className="font-bold px-2 " href={"/"}>Hacker News</Link>
            <div className="divide-x-[1.5px] divide-solid divide-gray-800">

              {hackerNewsMenu.map(item => (
                <Link key={item.href} href={item.href} className="px-2 ">{item.text}</Link>
              ))}
            </div>
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
