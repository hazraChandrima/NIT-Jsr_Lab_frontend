"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import NewsCard from "@/components/HomeComponents/NewsComponents/NewsCard";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ITEMS_PER_PAGE = 5;

function NewsPage() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `/api/notices?populate=Pdf&pagination[page]=${currentPage}&pagination[pageSize]=${ITEMS_PER_PAGE}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const res = await response.json();
        const noticesData = res?.data || [];
        const totalPageCount = res?.meta?.pagination?.pageCount || 0;

        setNotices(noticesData);
        setTotalPages(totalPageCount);
      } catch (error) {
        console.error("Error fetching notices:", error);
        setNotices([]);
        setTotalPages(0);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [currentPage]);

  const handleCardClick = (newsItem) => {
    router.push(`/Updates/${newsItem.id}`);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="flex flex-col bg-gray-50 py-5 min-h-dvh text-slate-600 text-right items-center">
      <div className="pt-6 text-left flex justify-start max-w-[1256px] w-full px-4 sm:px-6 lg:px-8">
        <BreadCrumbs
          title="News"
        />
      </div>

      <div className="w-full max-w-[1256px] px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-sans font-light text-sky-950 mb-6">
          NEWS
        </h1>
      </div>

      <div className="w-full max-w-[1256px] px-4 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-xl text-sky-950">Loading...</p>
          </div>
        ) : (
          notices.map((newsItem) => {
            return (
              <div
                key={newsItem.id}
                onClick={() => handleCardClick(newsItem)}
                className="cursor-pointer"
              >
                <NewsCard
                  date={newsItem.attributes.publishedAt}
                  title={newsItem.attributes.Title}
                  description={newsItem.attributes.Description}
                />
              </div>
            );
          })
        )}
      </div>

      <div className="flex justify-center my-10">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="primary"
          />
        </Stack>
      </div>
    </div>
  );
}

export default NewsPage;