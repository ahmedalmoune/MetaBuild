/*
* File: layout.tsx
* Description: Layout of the app. Just a simple footer.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '@/utils/bootstrapclient';
import { META } from '@/constants/general';

// Next.js optimized fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata for SEO
export const metadata: Metadata = {
  title: META.APP_NAME,
  description: META.APP_DESCRIPTION,
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main>{children}</main>

        <footer className="text-center pb-4"> 
          <span className="bg-secondary px-2 py-1 rounded text-white"> 
            Made by <a href={META.AUTHOR_URL} target="_blank" rel="noopener noreferrer" 
            className="text-white"> {META.AUTHOR}</a>
          </span> 
        </footer>

        <BootstrapClient />
      </body>
    </html>
  );
}
