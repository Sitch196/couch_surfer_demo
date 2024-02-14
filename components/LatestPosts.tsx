// LatestPosts.js

export function LatestPosts() {
  return (
    <section className="py-12 px-4">
      <main className="flex-grow">
        <section className="py-12 px-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-center">
            Latest Posts
          </h2>
          <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">
                  Cozy Apartment in New York
                </h3>
                <p className="mt-2 text-sm text-gray-500">Posted by John Doe</p>
                <p className="mt-4 flex-grow">
                  A cozy and affordable apartment in the heart of New York.
                  Close to subway stations and popular tourist attractions.
                </p>
                <button className="mt-4 border border-white py-2">
                  View More
                </button>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">
                  Sunny Room in San Francisco
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Posted by Jane Smith
                </p>
                <p className="mt-4 flex-grow">
                  A sunny room in a friendly neighborhood. Close to parks,
                  shops, and a short ride to downtown.
                </p>
                <button className="mt-4  border border-white py-2">
                  View More
                </button>
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold">
                  Spacious Loft in Berlin
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Posted by Max Müller
                </p>
                <p className="mt-4 flex-grow">
                  A spacious loft in Berlin's hippest district. Plenty of cafes,
                  bars, and galleries nearby.
                </p>
                <button className="mt-4  border border-white py-2 ">
                  View More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}
