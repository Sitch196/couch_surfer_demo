"use client";
import { Hero } from "@/components/Hero";
import { LatestPosts } from "@/components/LatestPosts";
import NewsLetterSignUp from "@/components/NewsLetterSignUp";
import useStoreUserEffect from "@/hooks/useStoreUser";
import { useConvexAuth } from "convex/react";
import { useState, useEffect } from "react";
import Loading from "./Loading";

export default function Welcome() {
  const { isLoading } = useConvexAuth();
  const store = useStoreUserEffect();
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTopButton(scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow">
        <LatestPosts />
      </main>
      <NewsLetterSignUp />

      {showScrollTopButton && (
        <button
          className="fixed bottom-8 right-8 bg-gray-800 text-white px-4 py-3 rounded-full hover:bg-white hover:text-black"
          onClick={handleScrollToTop}
        >
          ↑
        </button>
      )}
    </div>
  );
}
