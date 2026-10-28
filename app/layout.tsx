import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Akshay Bothale — Cloud Engineering Lead & IT Infrastructure Professional",
  description: "Portfolio of Akshay Bothale, Cloud Engineering Lead and IT Infrastructure Manager with 14+ years managing enterprise VMware, cloud, and server infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0e1011] text-[#e4e8eb] antialiased selection:bg-[#88a293] selection:text-[#0e1011]">
        {children}
      </body>
    </html>
  );
}
