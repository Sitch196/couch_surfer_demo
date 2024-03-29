import React from "react";
import Image from "next/image";
import hero from "../assets/heroimage.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="relative h-[500px] lg:h-[700px]  flex flex-col justify-center items-center">
      <Image
        alt="Cozy living room"
        className="fixed inset-0 object-cover -z-10  w-full h-full backdrop-grayscale opacity-75 mix-blend-darken "
        height={700}
        loading="lazy"
        src={hero}
      />
      <div className="flex flex-col items-center text-black  text-center z-1">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Welcome to Couch Surfers Tbilisi
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg lg:text-xl  ">
          Find a cozy place to stay or share your own. Connect with travelers
          and hosts around the world.
        </p>
        <div className="flex mt-4 ">
          <Link href="/posts">
            <button className="bg-black text-white px-6 py-3 rounded-md mr-4  hover:bg-white hover:text-black transition duration-500 ease-in-out">
              For Hosts
            </button>
          </Link>
          <Link href="/publish">
            <button className="bg-black text-white px-6 py-3 rounded-md mr-4  hover:bg-white hover:text-black transition duration-500 ease-in-out">
              For Guests
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
