import { Link } from "next-view-transitions";

export default function NotFound() {
  return (
    <>
      <div className="flex items-center justify-center h-screen fixed top-0 left-0 w-full bg-gray-700">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-2xl font-semibold">Page not found</p>
          <Link href="/" className="text-blue-500 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
}
