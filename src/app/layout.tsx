import "@/styles/globals.css";
import type { Metadata } from "next";
import { Noto_Sans_TC } from 'next/font/google';
import Navbar from "@/components/shared/Navbar";

const notoSansTC = Noto_Sans_TC({ subsets: ['latin'], variable: '--font-noto-sans-tc' });

export const metadata: Metadata = {
  title: "2025 Camp 體驗營任務",
  description: "使用 Next.js & React 開發",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${notoSansTC.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
