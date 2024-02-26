import type { Metadata } from "next";
import "./globals.css";
import ConvexClientProvider from "./ConvexClientProvider";
import Footer from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <body>
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
