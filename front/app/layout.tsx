import "./globals.css";
import type { Metadata } from "next";
import {  Roboto } from "next/font/google";
import Navbar from "./components/Navbar";
import { Providers } from "./redux/provider";

const roboto = Roboto({weight: "400", subsets:["latin"]});

export const metadata: Metadata = {
  title: "Conexa challenge",
  description: "Conexa challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
