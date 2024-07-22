"use client"
import React from "react";
import { useRouter } from 'next/navigation';
import NewsCard from '@/components/HomeComponents/NewsComponents/NewsCard';
import { useNews } from '@/contexts/NewsContext';
import ViewMore from "../ViewMoreComponent/ViewMoreComponent";
import Link from "next/link";

function NewsSection() {

  const router = useRouter();
  const { setNews } = useNews();

  const handleCardClick = (newsItem) => {
    setNews(newsItem);
    router.push('/News/Details');
  };

  const newsData = [
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
  ];

  return (

    <div className="flex flex-col py-5 text-black min-h-dvh text-right items-end ">
      <h1 className="text-7xl font-sans text-sky-900 font-light relative my-10 right-3">NEWS</h1>
      <div className="py-6 text-left flex flex-col items-center">
        {newsData.map((newsItem, index) => (
          <div key={index} onClick={() => handleCardClick(newsItem)}>
            <NewsCard
              key={index}
              date={newsItem.date}
              title={newsItem.title}
              description={newsItem.description}
              viewMoreLink={newsItem.viewMoreLink}
              galleryLink={newsItem.galleryLink}
            />
          </div>
        ))}
      </div>
      <div className="relative right-3 mb-32">
        <Link href={'/News'}>
          <ViewMore className="text-black" width={200} />
        </Link>
      </div>
    </div>
  );
}

export default NewsSection;
