"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import longlogo from "../assets/longlogo.png";
import shortlogo from "../assets/justlogo.png";
import {
  SignInButton,
  SignUpButton,
  useAuth,
  useUser,
} from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Navigation() {
  const { isSignedIn } = useAuth();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setHasScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full p-3 flex items-center bg-transparent ${
        hasScrolled ? "backdrop-blur-md backdrop-filter " : ""
      } justify-between  z-10`}
    >
      <div className="flex w-full justify-between items-center px-3">
        <Link href="/">
          <Image
            src={longlogo}
            priority
            alt="Logo"
            className="cursor-pointer hidden sm:inline-block"
            width={300}
          />
          <Image
            src={shortlogo}
            alt="Logo"
            className="cursor-pointer sm:hidden"
            width={100}
          />
        </Link>{" "}
        {isSignedIn ? (
          <div className="cursor-pointer z-20 flex gap-4 ">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex items-center  absolute top-6 right-4 cursor-pointer z-20">
            <div className="mr-4 inline-flex items-center justify-center px-6 py-3 text-base font-medium shadow-md bg-white text-black rounded-md hover:bg-gray-100">
              <SignUpButton />
            </div>
            <div className="mr-4 inline-flex items-center justify-center px-6 py-3 text-base font-medium shadow-md bg-white text-black rounded-md hover:bg-gray-100">
              <SignInButton mode="modal" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
