"use client"

import React, { useState } from 'react';
import NewsCard from '@/components/HomeComponents/NewsComponents/NewsCard';

const newsData = [
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/12/2024',
    title: 'News Title 1',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
  {
    date: '7/11/2024',
    title: 'News Title 2',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur saepe non, eaque fugiat quod eveniet quaerat quam, sit ratione tenetur quo aliquam.',
    viewMoreLink: '/#',
    galleryLink: '/#'
  },
];

const ITEMS_PER_PAGE = 5;

function NewsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  return (
    <div className='flex flex-col bg-slate-400 py-5 min-h-dvh text-white text-right items-center'>
      <div>
      <h1 className='text-3xl relative right-6 text-slate-800'>NEWS</h1>
      <div className="py-6 text-left flex flex-col items-center max-w-[1256px] w-full px-4">
        {getCurrentPageData().map((newsItem, index) => (
          <NewsCard
            key={index}
            date={newsItem.date}
            title={newsItem.title}
            description={newsItem.description}
            viewMoreLink={newsItem.viewMoreLink}
            galleryLink={newsItem.galleryLink}
          />
        ))}
      </div>
      
      </div>
      <div className="flex flex-wrap gap-2 justify-center space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-blue-500' : 'bg-gray-300'} text-black`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
    </div>
  );
}

export default NewsPage;
