"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BreadCrumbs = () => {
  const pathname = usePathname();
  const crumbs = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="breadcrumbs " className="p-4 w-fit bg-white rounded-lg">
      <ol className="flex flex-wrap ">
        <li className="mr-2">
          <Link href="/">
            <span className="text-gray-600 hover:text-gray-900 text-base sm:text-sm md:text-xs lg:text-xs xl:text-xs">
              Home /
            </span>
          </Link>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={index} className="mr-2">
            {index === crumbs.length - 1 ? (
              <span className="text-gray-600 text-base sm:text-sm md:text-xs lg:text-xs xl:text-xs">
                {crumb}
              </span>
            ) : (
              <Link href={`/${crumbs.slice(0, index + 1).join("/")}`}>
                <span className="text-gray-600 hover:text-gray-900 text-base sm:text-sm md:text-xs lg:text-xs xl:text-xs">
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
