"use client";
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface BookingDetails {
  title: string;
  fullname: string;
  description: string;
  numOfPeople: number;
  daysOfStaying: number;
}

export default function Component() {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    title: "",
    fullname: "",
    description: "",
    numOfPeople: 0,
    daysOfStaying: 0,
  });
  const router = useRouter();
  const createArticles = useMutation(api.articles.createArticle);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => ({
      ...prevDetails,
      [name]:
        name === "numOfPeople" || name === "daysOfStaying"
          ? parseInt(value, 10)
          : value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(bookingDetails).some((value) => !value)) {
      toast.error("Please fill in all fields.");
      return;
    }

    createArticles(bookingDetails);
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-[569px] mx-auto  p-6">
        <div>
          <h2 className="text-3xl font-bold">New Booking ✅</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Enter some details about yourself and hosts will contact you soon
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {Object.keys(bookingDetails).map((key) => (
              <div className="flex flex-col mb-4" key={key}>
                <label
                  htmlFor={key}
                  className="text-sm font-medium text-gray-600"
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                {key === "description" ? (
                  <textarea
                    id={key}
                    name={key}
                    value={bookingDetails[key]}
                    onChange={handleChange}
                    className="border border-gray-300 outline-none resize-none dark:border-gray-700 rounded-md p-2 min-h-[100px]"
                    placeholder={`Enter ${key}`}
                  />
                ) : (
                  <input
                    id={key}
                    name={key}
                    value={bookingDetails[key as keyof BookingDetails]}
                    onChange={handleChange}
                    className="border border-gray-300 outline-none dark:border-gray-700 rounded-md p-2"
                    placeholder={`Enter ${key}`}
                    type={
                      key === "numOfPeople" || key === "daysOfStaying"
                        ? "number"
                        : "text"
                    }
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Submit
            </button>
            <Button
              variant="destructive"
              className="bg-black text-white px-4 py-2 rounded-md"
            >
              <Link href="/">Cancel</Link>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
