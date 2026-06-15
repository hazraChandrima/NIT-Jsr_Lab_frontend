"use client";

import React, { useEffect, useState } from "react";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NoticeDetailsPage({ params }) {
  const { id } = params;
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await fetch(`/api/notices/${id}`);
        if (!response.ok) {
          throw new Error('Notice not found');
        }
        const res = await response.json();
        setNews(res.data);
      } catch (error) {
        console.error("Error fetching notice details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotice();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <p className="text-xl text-sky-950">Loading details...</p>
      </div>
    );
  }

  if (!news) {
    return notFound();
  }

  const pdfUrl = news.attributes.Pdf?.data?.attributes?.url;

  return (
    <div className="flex flex-col items-center py-5 px-4 bg-gray-50 min-h-fit">
      {/* Breadcrumbs and Title */}
      <div className="max-w-[1256px] w-full flex flex-col sm:flex-row justify-between items-center mb-8">
        <BreadCrumbs
          title={news.attributes.Title}
          parent={{ label: "Updates", link: "/Updates" }}
        />
        <h2 className="text-3xl sm:text-4xl text-sky-950 font-sans font-light mt-4 sm:mt-0">
          News Details
        </h2>
      </div>

      {/* News Card */}
      <div className="bg-white/80 backdrop-blur-md shadow-lg rounded-lg overflow-hidden max-w-[1256px] w-full mb-14">
        <div className="p-6 sm:p-8">
          <div className="text-center mb-4 text-slate-500">
            {new Date(
              news.attributes.publishedAt || news.attributes.createdAt,
            ).toLocaleDateString()}
          </div>

          {/* News Title */}
          <h1 className="text-3xl sm:text-4xl font-sans font-light mb-6 text-center text-gray-900">
            {news.attributes.Title}
          </h1>

          {/* News Description */}
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            {news.attributes.Description}
          </p>

          {/* Action Button */}
          {pdfUrl && (
            <div className="flex flex-col items-center justify-center mt-10">
              <Link href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <div className="transition duration-500 border-2 rounded-sm border-sky-500 bg-sky-500 text-white hover:bg-white hover:text-sky-500 py-2 px-6 text-lg cursor-pointer flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  View Attached PDF
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
