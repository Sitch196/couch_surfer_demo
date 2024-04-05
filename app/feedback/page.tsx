"use client";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";

export default function FeedBack() {
  const [feedBack, setFeedback] = useState("");
  const createFeedback = useMutation(api.feedback.createFeedback);

  const onSubmitFeedback = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!feedBack) return;
    createFeedback({
      feedback: feedBack,
    });
    setFeedback("");
    toast.success("Feedback Sent Successfully");
  };

  return (
    <div className="min-h-screen flex items-start  justify-center bg-gray-100">
      <div className=" relative max-w-md w-full  p-6 bg-white rounded-md shadow-md">
        <div className="flex items-center  ">
          <h2 className="text-2xl font-semibold mb-4">Leave Feedback</h2>
          <Link
            href="/"
            className="absolute right-5 top-5 cursor-pointer text-blue-500 hover:text-blue-600"
          >
            <FiArrowLeft size={24} />
          </Link>
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label
            htmlFor="feedback"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Your Feedback:
          </label>

          <textarea
            id="feedback"
            name="feedback"
            onChange={(e) => setFeedback(e.target.value)}
            value={feedBack}
            className="w-full h-[150px] px-3 py-2 border resize-none border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter your feedback here..."
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={onSubmitFeedback}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mb-4"
        >
          Submit Feedback
        </button>
      </div>
    </div>
  );
}
