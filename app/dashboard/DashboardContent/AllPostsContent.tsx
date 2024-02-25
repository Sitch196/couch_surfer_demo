"use client";
import { api } from "@/convex/_generated/api";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useQuery } from "convex/react";

export default function AllPostsContent() {
  const currentUser = useAuth().userId;
  const myArticles = useQuery(api.articles.getArticles);

  // Filter articles based on userId
  const filteredArticles = myArticles?.filter(
    (article) => article.userId === currentUser
  );

  return (
    <div>
      {filteredArticles?.map((article) => (
        <div key={article._id}>{article.title}</div>
      ))}
    </div>
  );
}
