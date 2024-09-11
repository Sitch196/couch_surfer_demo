import Link from "next/link";

export default function NewsLetterSignUp() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-10 flex flex-col items-center justify-center bg-black border-t border-white">
      <div className="container gap-4 px-4 text-center md:px-6">
        <div className="space-y-3 text-center">
          <h2 className="text-3xl text-white font-bold tracking-tighter sm:text-4xl md:text-5xl border-red-500">
            Join Our Community
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Sign up to post your own requests and connect with others.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0 items-center">
            <input
              className="w-full md:flex-1 indent-3 rounded-md h-[3rem] text-black border border-gray-300"
              placeholder="Enter your email"
              required
              type="email"
            />
            <button className="w-full md:w-auto bg-white text-black px-4 py-2 rounded-md">
              Sign Up
            </button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By signing up, you agree to our{" "}
            <span className="underline underline-offset-2">
              <Link href="terms">Terms & Conditions</Link>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
