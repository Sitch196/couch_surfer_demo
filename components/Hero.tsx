// Hero.js
import React from "react";
import Image from "next/image";
import hero from "../assets/heroimage.jpg";

export function Hero() {
  return (
    <header className="relative h-[500px] lg:h-[700px]  flex flex-col justify-center items-center">
      <Image
        alt="Cozy living room"
        className="absolute inset-0 object-cover w-full h-full grayscale opacity-35 "
        height={700}
        src={hero}
      />
      <div className="text-white text-center z-10">
        <h1 className="text-3xl lg:text-5xl font-bold">Welcome to CouchSurf</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg lg:text-xl">
          Find a cozy place to stay or share your own. Connect with travelers
          and hosts around the world.
        </p>
      </div>
    </header>
  );
}
