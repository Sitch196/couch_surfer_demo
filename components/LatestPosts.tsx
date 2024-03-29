import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useRouter } from "next/navigation";

export default function LatestPosts() {
  const latestPosts = useQuery(api.articles.getArticles);
  const lastThreePosts = latestPosts?.slice(-3).reverse();
  const router = useRouter();

  return (
    <section className="py-12 px-4 bg-black text-white">
      <main className="flex-grow">
        <section className="py-12 px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center">
            Latest Posts
          </h2>
          <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {lastThreePosts?.map((post) => (
              <div key={post._id}>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{post.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Posted by {post.fullname}
                  </p>
                  <p className="mt-4 flex-grow overflow-hidden line-clamp-2">
                    {post.description}
                  </p>
                  <button
                    className="mt-4 border rounded-sm border-white py-2 hover:bg-white hover:text-black transition duration-500 ease-in-out"
                    onClick={() => router.push(`/posts/${post._id}`)}
                  >
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
}
