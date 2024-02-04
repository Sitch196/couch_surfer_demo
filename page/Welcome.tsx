import Link from "next/link";
import Image from "next/image";
import hero from "../assets/heroimage.jpg";
export function Welcome() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="relative h-[500px] lg:h-[700px] ">
        <Image
          alt="Cozy living room"
          className="absolute inset-0 object-cover w-full h-full grayscale opacity-60"
          height={700}
          src={hero}
        />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Welcome to CouchSurf
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg lg:text-xl">
            Find a cozy place to stay or share your own. Connect with travelers
            and hosts around the world.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md hover:bg-gray-100"
              href="#"
            >
              Sign Up
            </Link>
            <Link
              className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-md border border-white hover:bg-white hover:text-black"
              href="#"
            >
              Log In
            </Link>
          </div>
        </div>
      </header>
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
      <footer className="py-6 px-4 text-center text-sm text-gray-500">
        © 2024 CouchSurf. All rights reserved.
      </footer>
    </div>
  );
}
