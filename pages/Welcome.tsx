"use client";
import React from "react";
import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { LatestPosts } from "../components/LatestPosts";
import { useConvexAuth } from "convex/react";
import useStoreUserEffect from "@/hooks/useStoreUser";

export function Welcome() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const store = useStoreUserEffect();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (store === null) {
    return <div>storing user ...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation isAuthenticated={isAuthenticated} />
      <Hero />
      <main className="flex-grow">
        <LatestPosts />
      </main>
      {/* ... other content */}
    </div>
  );
}
