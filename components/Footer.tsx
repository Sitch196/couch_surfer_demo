import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-black p-5">
      <div className="flex    gap-4 mb-4 ">
        <p className="text-sm text-gray-500 cursor-pointer dark:text-gray-400">
          <Link href="/about">About</Link>
        </p>
        <p className="text-sm text-gray-500 cursor-pointer dark:text-gray-400">
          <Link href="/contact">Contact</Link>
        </p>
        <p className="text-sm text-gray-500 cursor-pointer dark:text-gray-400">
          <Link href="/feedback">Feedback</Link>
        </p>
        <p className="text-sm text-gray-500 cursor-pointer dark:text-gray-400">
          <Link href="/faq"> FAQ</Link>
        </p>
        <p className="text-sm text-gray-500 cursor-pointer dark:text-gray-400">
          <Link href="/career">Career</Link>
        </p>
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[750px] w-full text-center mb-2">
        "Tbilisi Couch Surfers: Your go-to platform for authentic travel
        experiences in Tbilisi, Georgia. Connect with locals offering free
        accommodations, fostering cultural exchange and creating memorable stays
        "
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center sm:hidden">
        © 2024 Couch Surfers Tbilisi. All rights reserved.
      </p>
    </footer>
  );
}
