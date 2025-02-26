import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
  
const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-instrument-sans', // Optional: to use as a CSS variable
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${instrumentSans.variable}`}>{children}</body>
    </html>
  );
}
