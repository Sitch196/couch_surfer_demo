"use client";
import city from "../../assets/city.png";
import Image from "next/image";
import { useQuery } from "convex/react";
import { useConvexAuth } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import { calculateRelativeTime } from "@/utils/CalculateRelativeTime";
import { useState } from "react";
import { FiFilter } from "react-icons/fi";
import Link from "next/link";

const Page = () => {
  const [sortBy, setSortBy] = useState("new");
  const [showSortOptions, setShowSortOptions] = useState(false);
  const allPosts = useQuery(api.articles.getArticles);
  const sortedPosts = allPosts?.sort(
    sortBy === "new"
      ? (a, b) => b._creationTime - a._creationTime
      : (a, b) => a._creationTime - b._creationTime
  );
  const router = useRouter();
  const { isLoading } = useConvexAuth();

  if (isLoading) return <Loading />;

  return (
    <div className="relative min-h-screen flex flex-col items-center ">
      <Image
        src={city}
        alt="Background"
        priority
        className="absolute inset-0 w-full h-full object-cover object-center z-[-1] blur-sm"
      />

      <div className="mt-8 mb-4 px-2 w-full flex flex-col sm:flex-row items-center justify-between">
        <div className="flex">
          <p className="text-xl px-2 font-semibold mb-2 sm:mb-0 sm:mr-2 border-black border-l-[6px] ">
            Take a look at all the posts here <span> /</span>
          </p>
          <p className="text-lg underline">
            <Link href="/publish">Publish article</Link>
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-semibold  sm:block">Sort by:</p>
          <FiFilter
            className="cursor-pointer"
            onClick={() => setShowSortOptions(!showSortOptions)}
          />
          {showSortOptions && (
            <div className="flex items-center space-x-2">
              <p
                className="cursor-pointer hover:underline"
                onClick={() => {
                  setSortBy("new");
                  setShowSortOptions(false);
                }}
              >
                Newer
              </p>
              <p
                className="cursor-pointer hover:underline"
                onClick={() => {
                  setSortBy("old");
                  setShowSortOptions(false);
                }}
              >
                Older
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sortedPosts?.map((post) => (
          <div key={post._id} className="p-2">
            <div className="flex flex-col justify-around rounded-md p-3 h-full shadow-md bg-white">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-gray-500">
                Posted by {post.fullname}
              </p>
              <p>{calculateRelativeTime(post._creationTime)}</p>
              <p className="mt-4 overflow-hidden line-clamp-2">
                {post.description}
              </p>
              <button
                className="mt-4 border border-white py-2 px-4 bg-black text-white rounded-md"
                onClick={() => router.push(`/posts/${post._id}`)}
              >
                Open Post
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
