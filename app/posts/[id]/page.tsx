"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

interface BlogDetailsProps {
  params: {
    id: string;
  };
}

export default function page({ params }: BlogDetailsProps) {
  const post = useQuery(api.articles.getArticles);
  const targetPost = post?.filter((post) => post._id === params.id);
  return (
    <div className="flex justify-center items-center h-screen">
      {targetPost?.map((post) => (
        <div key={post._id}>
          <p>{post.fullname}</p>
          <p>{post.title}</p>
          <p>{post.description}</p>
          <p>{post.numOfPeople}</p>
        </div>
      ))}
    </div>
  );
}
