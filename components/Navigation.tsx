"use client";
import React from "react";
import Image from "next/image";
import longlogo from "../assets/longlogo.png";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import { useConvex } from "convex/react";
import Link from "next/link";

export function Navigation() {
  const isAuthenticated = useConvex();

  return (
    <nav className="fixed w-full p-3 flex items-center bg-transparent justify-between z-10">
      <div className="flex w-full justify-between items-center px-2">
        <Link href="/">
          <Image
            src={longlogo}
            alt="Logo"
            className="cursor-pointer sm:w-170 md:w-220"
            width={300}
            height={50}
          />
        </Link>{" "}
        {isAuthenticated ? (
          <div className="cursor-pointer z-20">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex items-center absolute top-4 right-4 cursor-pointer z-20">
            <div className="mr-4 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md hover:bg-gray-100">
              <SignUpButton />
            </div>
            <div className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-md border border-white hover:bg-white hover:text-black">
              <SignInButton mode="modal" />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
