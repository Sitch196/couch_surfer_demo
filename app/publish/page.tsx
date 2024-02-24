"use client";
import { api } from "@/convex/_generated/api";
import { useConvexAuth, useMutation } from "convex/react";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Loading from "../Loading";

interface BookingDetails {
  title: string;
  fullname: string;
  description: string;
  numOfPeople: number;
  daysOfStaying: number;
}

interface BookingDetail {
  key: string;
  label: string;
}

const bookingDetailsConfig: BookingDetail[] = [
  { key: "title", label: "Title" },
  { key: "fullname", label: "Full Name" },
  { key: "description", label: "Description" },
  { key: "numOfPeople", label: "Number of People" },
  { key: "daysOfStaying", label: "Days of Staying" },
];

export default function Component() {
  const [bookingDetails, setBookingDetails] = useState<Array<BookingDetails>>([
    {
      title: "",
      fullname: "",
      description: "",
      numOfPeople: 0,
      daysOfStaying: 0,
    },
  ]);
  const router = useRouter();
  const createArticles = useMutation(api.articles.createArticle);
  const { isLoading } = useConvexAuth();

  if (isLoading) return <Loading />;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    setBookingDetails((prevDetails) => {
      const newDetails = [...prevDetails];
      newDetails[index] = {
        ...newDetails[index],
        [name]:
          name === "numOfPeople" || name === "daysOfStaying"
            ? parseInt(value, 10)
            : value,
      };
      return newDetails;
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      bookingDetails.some((details) =>
        Object.values(details).some((value) => !value)
      )
    ) {
      toast.error("Please fill in all fields.");
      return;
    }

    bookingDetails.forEach((details) => createArticles(details));
    toast.success("Article has been Successfully Added");
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
            {bookingDetails.map((details, index) => (
              <div key={index}>
                {bookingDetailsConfig.map(({ key, label }) => (
                  <div className="flex flex-col mb-4" key={key}>
                    <label
                      htmlFor={key}
                      className="text-sm font-medium text-gray-600"
                    >
                      {label}
                    </label>
                    {key === "description" ? (
                      <textarea
                        id={key}
                        name={key}
                        value={details[key]}
                        onChange={(e) => handleChange(e, index)}
                        className="border border-gray-300 outline-none resize-none dark:border-gray-700 rounded-md p-2 min-h-[100px]"
                        placeholder={`Enter ${label}`}
                      />
                    ) : (
                      <input
                        id={key}
                        name={key}
                        value={details[key as keyof BookingDetails]}
                        onChange={(e) => handleChange(e, index)}
                        className="border border-gray-300 outline-none dark:border-gray-700 rounded-md p-2"
                        placeholder={`Enter ${label}`}
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
