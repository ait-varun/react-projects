"use client";
import { Link } from "next-view-transitions";

export default function Error() {
  return (
    <>
      <div className="flex items-center justify-center h-screen fixed top-0 left-0 w-full bg-gray-700">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold">500</h1>
          <p className="text-2xl font-semibold">Internal server error</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out">
            <Link href="/">Go back home</Link>
          </button>
        </div>
      </div>
    </>
  );
}
