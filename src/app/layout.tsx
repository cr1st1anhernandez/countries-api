import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { type ReactNode } from "react";
import { Providers } from "./Providers";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CountriesApi",
  description: "Api to get countries information and more",
};

export default function RootLayout({
  children,
}: Readonly<{
    children: ReactNode;
  }>): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="keppel-light min-h-screen dark:kepple-dark pb-8 bg-[#eef2ff] dark:bg-[#111113]">
          <Nav />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
