import Image from "next/image";
import hero from "../../assets/heroimage.jpg";

export default function Page() {
  return (
    <div className="container mx-auto bg-gradient-to-br  from-white via-[#00bfd8] to-[#0083f5] p-4 max-w-screen-md h-screen">
      <p className="text-justify hyphens-auto">
        Welcome to Tbilisi Couch Surfers, your trusted companion in discovering
        the heart of Georgia's capital. We specialize in connecting travelers
        with welcoming locals, offering a unique and authentic stay in Tbilisi.
        As a dedicated accommodation service, Tbilisi Couch Surfers goes beyond
        the conventional, fostering cultural exchange and creating memorable
        experiences.
      </p>
      <br />
      <p className="text-justify hyphens-auto">
        Our platform enables visitors to find a comfortable couch or spare room
        while immersing themselves in the warmth of Georgian hospitality. With a
        commitment to safety and quality, we take pride in being the best choice
        for those seeking not just a place to stay, but a genuine connection to
        Tbilisi's vibrant spirit.
      </p>
      <Image
        src={hero}
        alt="hero image"
        loading="lazy"
        className="rounded-md"
      />
    </div>
  );
}
