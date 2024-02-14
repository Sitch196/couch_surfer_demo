export default function NewsLetterSignUp() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Join Our Community
          </h2>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Sign up to post your own requests and connect with others.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
          <form className="flex space-x-2">
            <input
              className="max-w-lg flex-1 indent-2 rounded-md h-[3rem] text-black"
              placeholder="Enter your email"
              required
              type="email"
            />
            <button type="submit">Sign Up</button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            By signing up, you agree to our
            <span className="underline underline-offset-2">
              Terms & Conditions
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
