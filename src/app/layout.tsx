import type { Metadata } from "next";
import "yakuhanjp";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fontry",
  description: "Googleフォントを試せるよ",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
