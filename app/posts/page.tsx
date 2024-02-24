"use client";
import city from "../../assets/city.jpg";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";

const Page = () => {
  const allPosts = useQuery(api.articles.getArticles);
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Image
        src={city}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-[-1] blur-sm"
      />

      <div className="relative z-10 bg-white p-8 mb-[80px] rounded-lg shadow-lg">
        <input
          type="text"
          className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          placeholder="Enter text"
        />
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <label className="mb-2 sm:mb-0">Days of staying</label>
          <select className="p-2 border w-full sm:w-[150px] border-gray-300 rounded-md">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
          <label className="mb-2 sm:mb-0">Number of People</label>
          <select className="p-2 border w-full sm:w-[150px] border-gray-300 rounded-md">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5+">5+</option>
          </select>
        </div>
      </div>

      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {allPosts?.map((post) => (
          <div key={post._id} className="p-2 ">
            <div className="flex flex-col justify-around rounded-md p-3 h-full bg-white">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-gray-500">
                Posted by {post.fullname}
              </p>
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
