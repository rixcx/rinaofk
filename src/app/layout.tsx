import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "rinaofk",
  description: "Hello. I’m Rina, Web Designer and developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
