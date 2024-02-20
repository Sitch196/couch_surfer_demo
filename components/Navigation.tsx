"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import longlogo from "../assets/longlogo.png";
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
  // const { user } = useUser();

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
        hasScrolled ? "backdrop-blur-md backdrop-filter" : ""
      } justify-between z-10`}
    >
      <div className="flex w-full justify-between items-center px-3">
        <Link href="/">
          <Image
            src={longlogo}
            alt="Logo"
            className="cursor-pointer sm:w-170 md:w-220"
            width={300}
            height={50}
          />
        </Link>{" "}
        {isSignedIn ? (
          <div className="cursor-pointer z-20">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex items-center absolute top-4 right-4 cursor-pointer z-20">
            <div className="mr-4 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md hover:bg-gray-100">
              <SignUpButton />
            </div>
            <div className="mr-4 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md hover:bg-gray-100">
              <SignInButton mode="modal" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
