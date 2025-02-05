import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const halvatica = localFont({
  src: [
    {
      path: "../../public/fonts/regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/black.ttf",
      weight: "900",
    },
    {
      path: "../../public/fonts/medium.ttf",
      weight: "500",
    },
  ],
  variable: "--font-halvatica",
});

export const metadata: Metadata = {
  title: "ShareEase",
  description: "This app belongs to ShareEase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${halvatica.variable} font-sans`}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </head>
      <body>{children}</body>
    </html>
  );
}
