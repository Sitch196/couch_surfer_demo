// Hero.js
import React from "react";
import Image from "next/image";
import hero from "../assets/heroimage.jpg";
import Link from "next/link";

export function Hero() {
  return (
    <header className="relative h-[500px] lg:h-[700px]  flex flex-col justify-center items-center">
      <Image
        alt="Cozy living room"
        className="absolute inset-0 object-cover w-full h-full backdrop-grayscale-0 opacity-65 mix-blend-darken "
        height={700}
        loading="lazy"
        src={hero}
      />
      <div className="flex flex-col items-center text-black text-center z-10">
        <h1 className="text-3xl lg:text-5xl font-bold">
          Welcome to Couch Surfers Tbilisi
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg lg:text-xl">
          Find a cozy place to stay or share your own. Connect with travelers
          and hosts around the world.
        </p>
        <div className="flex mt-4 ">
          <button className="bg-black text-white px-4 py-2 rounded-md mr-4">
            For Guests
          </button>
          <Link href="/publish">
            <button className="bg-black text-white px-4 rounded-md py-2">
              For Hosts
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
