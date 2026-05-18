/*
* File: layout.tsx
* Description: Layout of the app. Just a simple footer.
* Author: Ahmed Almoune
* Date: 5/3/2026
*/

import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapClient from '@/utils/bootstrapclient';
import { Geist, Geist_Mono } from "next/font/google";
import { META } from '@/constants/general';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { Metadata } from "next";
import { Toaster } from 'sonner';
import { Providers } from './providers';

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
  title: META.appName,
  description: META.appDescription,
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Providers>
          <NuqsAdapter>
            <main>{children}</main>
          </NuqsAdapter>

          <footer className="text-center pb-4"> 
            <span className="bg-secondary px-2 py-1 rounded text-white"> 
              Made by <a href={META.authorUrl} target="_blank" rel="noopener noreferrer" 
              className="text-white"> {META.author}</a>
            </span> 
          </footer>
        </Providers>
      </body>
    </html>
  );
}
