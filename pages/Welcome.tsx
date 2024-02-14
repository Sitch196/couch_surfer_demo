"use client";
import React from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { LatestPosts } from "../components/LatestPosts";
import { useConvexAuth } from "convex/react";
import useStoreUserEffect from "@/hooks/useStoreUser";
import NewsLetterSignUp from "@/components/NewsLetterSignUp";
import Loading from "@/app/Loading";

export function Welcome() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const store = useStoreUserEffect();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation isAuthenticated={isAuthenticated} />
      <Hero />
      <main className="flex-grow">
        <LatestPosts />
      </main>
      <NewsLetterSignUp />
    </div>
  );
}
