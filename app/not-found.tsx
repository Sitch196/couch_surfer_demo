import Link from "next/link";

import React from "react";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600">Oops! Page not found</p>
        <Link href="/">
          <button className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-full transition duration-300 hover:bg-blue-600">
            Go back to home
          </button>
        </Link>
      </div>
    </div>
  );
}
