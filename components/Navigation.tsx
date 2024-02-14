// Nav.js
import React from "react";
import Image from "next/image";
import longlogo from "../assets/longlogo.png";
import { SignInButton } from "@clerk/clerk-react";
import { UserButton } from "@clerk/nextjs";

interface userauth {
  isAuthenticated: boolean;
}
export function Navigation({ isAuthenticated }: userauth) {
  return (
    <nav className="absolute top-4 left-4 right-4 flex items-center justify-between">
      <div>
        <Image src={longlogo} alt="Logo" width={250} height={50} />
        {isAuthenticated ?? <UserButton />}
      </div>
      <div className="flex items-center">
        {!isAuthenticated && (
          <>
            <div className="mr-4 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md hover:bg-gray-100">
              Sign Up
            </div>
            <div className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-md border border-white hover:bg-white hover:text-black">
              <SignInButton mode="modal" />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
