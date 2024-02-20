"use client";
import CommentSection from "@/components/CommentSection";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { FaUsers, FaCalendar } from "react-icons/fa";
interface BlogDetailsProps {
  params: {
    id: string;
  };
}

export default function DetailedPage({ params }: BlogDetailsProps) {
  const post = useQuery(api.articles.getArticles);
  const targetPost = post?.filter((post) => post._id === params.id);

  const renderIcon = (icon: React.ReactNode) => (
    <div className="icon">{icon}</div>
  );

  return (
    <div className="flex justify-center h-screen">
      {targetPost?.map((post) => (
        <div
          key={post._id}
          className="bg-white p-8 h-[550px] rounded-md shadow-md w-full sm:max-w-md md:max-w-lg lg:max-w-4xl max-h-screen overflow-y-auto"
        >
          <div className="flex justify-between">
            <div className="flex items-center">
              {renderIcon(<FaUsers className="text-gray-500" />)}
              <p className="ml-2">Person {post.numOfPeople}</p>
            </div>
            <div className="flex items-center">
              {renderIcon(<FaCalendar className="text-gray-500" />)}
              <p className="ml-2">Day {post.daysOfStaying}</p>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="font-bold mb-2">Posted by {post.fullname}</p>
          <p className="text-gray-700">{post.description}</p>
          <CommentSection postId={post._id} />
        </div>
      ))}
    </div>
  );
}
