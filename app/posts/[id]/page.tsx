"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

export default function page({ params }) {
  const post = useQuery(api.articles.getArticles);
  const targetPost = post?.filter((post) => post._id === params.id);
  console.log(targetPost);
  return <div>{params.id}</div>;
}
