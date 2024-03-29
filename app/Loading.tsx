import justlogo from "../assets/justlogo.png";
import Image from "next/image";

const Loading = () => (
  <div className="fixed top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-900 z-50">
    <div className="flex items-center animate-spin">
      <Image src={justlogo} className="z-100" alt="spinner" />
    </div>
    <p className="text-2xl text-white mt-4">Loading ...</p>
  </div>
);

export default Loading;
