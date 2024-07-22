"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const crumbs = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumbs " className="px-4 py-2 w-fit my-5 bg-white rounded-md rounded-tl-none rounded-bl-none">
      <ol className="flex flex-wrap ">
        <li className="mr-2">
          <Link href="/">
            <span className="text-gray-600 hover:text-gray-950 text-base ">
              Home /
            </span>
          </Link>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={index} className="mr-2">
            {index === crumbs.length - 1 ? (
              <span className="text-gray-600 font-semibold text-base ">
                {crumb}
              </span>
            ) : (
              <Link href={`/${crumbs.slice(0, index + 1).join("/")}`}>
                <span className="text-gray-600 hover:text-gray-950 text-base ">
                  {crumb} /
                </span>
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
