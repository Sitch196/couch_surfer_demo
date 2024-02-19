import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Couch Surfers Tbilisi",
  description: "Contact locals for place to stay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        {" "}
        <ConvexClientProvider>
          <Navigation />
          <ToastContainer />

          {children}
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
