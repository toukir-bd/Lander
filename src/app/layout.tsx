import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "ilham",
  description: "Your best product",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
