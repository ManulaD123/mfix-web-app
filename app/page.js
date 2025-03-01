import Link from "next/link";

export default function Home() {
  const description = ` Discover the world of movies like never before with Mflix! Whether
          you're a fan of action-packed blockbusters, heartwarming dramas, or
          thrilling sci-fi adventures, we've got something for everyone.`;
  return (
    <div
      className=" flex justify-center items-center min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0, 4, 10, 0.6), rgba(38, 41, 46, 0.8)), url('/movie-poster.jpg')",
      }}
    >
      <div className=" flex flex-col justify-center items-center w-[1000px]">
        <h1 className="text-white text-8xl font-mono font-bold ">
          WELCOME TO Mflix
        </h1>
        <p className="text-center text-white text-2xl font-mono mt-3">
          {description}
        </p>
        <div className="flex gap-10 mt-3">
          <Link
            href="/login"
            className="text-blue-200 text-3xl hover:underline font-semibold"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-yellow-400 text-3xl hover:underline font-semibold"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
