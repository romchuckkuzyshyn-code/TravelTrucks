import React from "react";
import "./globals.css";
import Header from "../components/Header/Header";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Metadata } from "next";

interface RootLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  metadataBase: new URL("travel-trucks-three-lovat.vercel.app"),
  title: {
    default: "TravelTrucks",
    template: "%s | TravelTrucks",
  },
  description:
    "TravelTrucks is a camper rental service where you can browse the catalog and choose the perfect camper for your trip.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <ToastContainer position="top-right" autoClose={3000} />
        </TanStackProvider>
      </body>
    </html>
  );
}
