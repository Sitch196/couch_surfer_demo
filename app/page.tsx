"use client";
import { lazy, Suspense } from "react";
import { useConvexAuth } from "convex/react";
import { useState, useEffect } from "react";
import useStoreUserEffect from "@/hooks/useStoreUser";

const Hero = lazy(() => import("@/components/Hero"));
const LatestPosts = lazy(() => import("@/components/LatestPosts"));
const NewsLetterSignUp = lazy(() => import("@/components/NewsLetterSignUp"));
const Loading = lazy(() => import("./Loading"));

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
