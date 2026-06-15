"use client";
import Link from "next/link";

const BreadCrumbs = ({ title, parent = null }) => {
  return (
    <nav className="px-4 py-2 w-fit my-5 bg-white rounded-md">
      <ol className="flex flex-wrap">
        <li className="mr-2">
          <Link href="/">
            <span className="text-gray-600">Home /</span>
          </Link>
        </li>

        {/* ✅ Only show parent if provided */}
        {parent && (
          <li className="mr-2">
            <Link href={parent.link}>
              <span className="text-gray-600">{parent.label} /</span>
            </Link>
          </li>
        )}

        <li className="mr-2">
          <span className="text-cyan-600 font-semibold">{title}</span>
        </li>
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
