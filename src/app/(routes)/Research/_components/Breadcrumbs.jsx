"use client";
import Link from "next/link";

const BreadCrumbs = ({ title }) => {
  return (
    <nav className="px-4 py-2 w-fit my-5 bg-white rounded-md">
      <ol className="flex flex-wrap items-center">
        <li className="mr-2">
          <Link href="/">
            <span className="text-gray-600 hover:text-gray-900">Home /</span>
          </Link>
        </li>

        <li className="mr-2">
          <Link href="/research">
            <span className="text-gray-600 hover:text-gray-900">
              Research /
            </span>
          </Link>
        </li>

        <li className="mr-2">
          <span className="text-cyan-600 font-semibold">
            {title ? (
              title
            ) : (
              <span className="animate-pulse text-gray-400">Loading...</span>
            )}
          </span>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
