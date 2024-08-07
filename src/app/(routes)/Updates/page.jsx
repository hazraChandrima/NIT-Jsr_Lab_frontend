"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NewsCard from "@/components/HomeComponents/NewsComponents/NewsCard";
import { useNews } from "@/contexts/NewsContext";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

const newsData = [
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/12/2024",
    title: "News Title 1",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
  {
    date: "7/11/2024",
    title: "News Title 2",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.",
    viewMoreLink: "/#",
    galleryLink: "/#",
  },
];

const ITEMS_PER_PAGE = 5;

function NewsPage() {
  const router = useRouter();
  const { setNews } = useNews();

  const handleCardClick = (newsItem) => {
    setNews(newsItem);
    router.push("/Updates/Details");
  };
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    if (endPage - startPage < maxPagesToShow - 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-4 py-2 rounded-md ${currentPage === i ? 'bg-cyan-500' : 'bg-gray-300'} text-black`}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className='flex flex-col bg-white py-5 min-h-dvh text-slate-600 text-right items-center'>
      <div className='pt-6 text-left flex justify-start max-w-[1256px] w-full px-9'>
        <BreadCrumbs/>
      </div>
      <div>
        <h1 className='text-5xl font-sans font-light relative right-6 text-sky-950'>NEWS</h1>
        <div className="py-6 text-left flex flex-col items-center max-w-[1256px] w-full px-4">
          {getCurrentPageData().map((newsItem, index) => (
            <div key={index} onClick={() => handleCardClick(newsItem)}>
              <NewsCard
                date={newsItem.date}
                title={newsItem.title}
                description={newsItem.description}
                viewMoreLink={newsItem.viewMoreLink}
                galleryLink={newsItem.galleryLink}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-2 justify-center space-x-2 mb-10">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-100' : 'bg-cyan-500'} text-black`}
          disabled={currentPage === 1}
        >
          {`<<`}
        </button>
        {renderPageNumbers()}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-100' : 'bg-cyan-500'} text-black`}
          disabled={currentPage === totalPages}
        >
           {`>>`}
        </button>
      </div>
    </div>
  );
}

export default NewsPage;