"use client";
import React from "react";
import Image from "next/image";
import longlogo from "../assets/longlogo.png";
import { SignInButton, SignUpButton } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";
import { useConvex } from "convex/react";
import Link from "next/link";

interface userauth {
  isAuthenticated: boolean;
}
export function Navigation() {
  const isAuthenticated = useConvex();
  return (
    <nav className="absolute top-4 left-4 right-4 flex items-center justify-between">
      <div>
        <Link href="/">
          <Image
            src={longlogo}
            alt="Logo"
            className="cursor-pointer"
            width={320}
            height={50}
          />
        </Link>{" "}
        {isAuthenticated ? (
          <div className="absolute top-4 right-4 cursor-pointer z-10 ">
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <div className="flex items-center absolute top-4 right-4 cursor-pointer z-10">
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
