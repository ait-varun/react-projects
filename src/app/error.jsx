"use client";

import Link from "next/link";
export default function Error() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
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
