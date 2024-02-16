import Image from "next/image";
import hero from "../../assets/heroimage.jpg";

export default function Component() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[569px] mx-auto mt-[100px] p-6  ">
        <div>
          <h2 className="text-3xl font-bold">New Booking ✔</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Enter the details for your new booking.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="flex flex-col mb-4">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-600"
              >
                Title
              </label>
              <input
                id="name"
                className="border border-gray-300 outline-none dark:border-gray-700 rounded-md p-2"
                placeholder="Enter Title of the ad"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                id="name"
                className="border border-gray-300 outline-none dark:border-gray-700 rounded-md p-2"
                placeholder="Enter your name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="description"
                className="text-sm font-medium text-gray-600"
              >
                Description
              </label>
              <textarea
                id="description"
                className="border  border-gray-300 outline-none resize-none dark:border-gray-700 rounded-md p-2 min-h-[100px]"
                placeholder="Enter your description"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="people"
                className="text-sm font-medium text-gray-600 "
              >
                Number of people
              </label>
              <input
                id="people"
                className="border border-gray-300 outline-none dark:border-gray-700 rounded-md p-2"
                placeholder="Enter number"
                type="number"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="days"
                className="text-sm font-medium text-gray-600"
              >
                Days of staying
              </label>
              <input
                id="days"
                className="border border-gray-300 outline-none dark:border-gray-700 rounded-md p-2"
                placeholder="Enter number"
                type="number"
              />
            </div>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
