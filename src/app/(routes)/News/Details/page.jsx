// pages/news/details.js
"use client";

import React from "react";
import { useNews } from "@/contexts/NewsContext";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import Link from "next/link";

function NewsDetailsPage() {
  const { news } = useNews();

  if (!news) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
        <BreadCrumbs />
        <p className="text-xl mt-4">No news selected</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center py-5 px-4 bg-white min-h-fit">
      <div className="max-w-[1256px] w-full flex justify-between items-center mb-4">
        <BreadCrumbs />
        <div className="text-right">
          <h2 className="text-3xl mr-4 text-sky-950 font-sans font-light">News Details</h2>
        </div>
      </div>
      <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden max-w-[1256px] w-full mb-14">
        <div className="p-6">
          <h1 className="text-4xl font-sans font-light mb-10 text-center text-gray-900">
            {news.title}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            {news.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div
              class="transition duration-500 border-2 rounded-sm max-w-[300px] border-sky-500 ease-in-out bg-sky-500 text-white hover:bg-gray-100 hover:text-sky-500 py-2 px-4 "
              style={{"opacity":"1","transform":"none","willChange":"auto"}}
            >
              <Link  href={news.viewMoreLink} target="_blank" rel="noopener noreferrer">
              Click for more details
              </Link>
            </div>
            
          </div>
        </div>
        {news.image && (
          <div className="relative h-64 md:h-80 w-full">
            <Image
              src={news.image}
              alt={news.title}
              layout="fill"
              objectFit="cover"
              className="rounded-b-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NewsDetailsPage;
