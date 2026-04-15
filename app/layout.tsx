import React from "react";
import "./globals.css";
import Header from "../components/Header/Header";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
