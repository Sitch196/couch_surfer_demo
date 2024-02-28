import React from "react";
import Link from "next/link";
export default function TermsConditionsPage() {
  return (
    <div className="container mx-auto p-8  flex flex-col justify-between h-screen">
      <div>
        <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
        <p className="mb-4">
          Welcome to our website. By accessing and using this website, you
          accept and agree to be bound by the terms and conditions set forth
          below. Please read these carefully before using our services.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            Use of this website is at your own risk. We do not guarantee the
            accuracy or completeness of information provided on this site.
          </li>
          <li>
            You agree not to misuse our services for any unlawful purposes or in
            violation of these terms.
          </li>
          <li>
            We reserve the right to modify or terminate our services at any time
            without notice.
          </li>
        </ul>
        <p>
          This is <span className="font-bold">not a real project</span>, and the
          information provided is for demonstration purposes only. We are not
          responsible for any consequences resulting from the use of this
          website.
        </p>
        <div className="text-center mt-7">
          <Link
            href="/"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}
