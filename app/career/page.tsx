import React from "react";

export default function CareersPage() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">Join Our Team</h1>
        <p className="text-gray-600 mb-4">
          Currently, there are no available positions, but you can send your
          resume at
          <span className="text-blue-500"> tcsinfo@app.dev</span>.
        </p>
      </div>
    </div>
  );
}
