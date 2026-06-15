"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

export default function JournalDetailPage() {
  const params = useParams();
  const { id } = params;
  const [journal, setJournal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const title = journal?.attributes?.Title || "Journal";

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/journal/${id}?populate=author`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch journal details");
        }
        
        const data = await response.json();
        setJournal(data.data);
      } catch (err) {
        console.error("Error fetching journal:", err);
        setError(err.message || "Failed to load journal details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getData();
    }
  }, [id]);

  

  if (error || !journal) {
    return (
      <div className="flex flex-col bg-white py-5 min-h-dvh text-slate-600">
        <BreadCrumbs title={title}/>
        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="text-2xl font-semibold text-red-600 mb-4">
            {error || "Journal not found"}
          </h1>
          <Link
            href="/Achievements/Journals"
            className="text-sky-600 hover:text-sky-800 underline"
          >
            Back to Journals
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(journal.attributes.Date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const authorName = journal.attributes.author?.data?.attributes?.name || "Unknown Author";

  return (
    <div className="flex flex-col bg-white py-5 min-h-dvh text-slate-600">
      <BreadCrumbs title={title}/>
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto w-11/12 md:w-3/4 mt-8 mb-8">
        <Link
          href="/Achievements/Journals"
          className="text-sky-600 hover:text-sky-800 underline text-sm mb-4 inline-block"
        >
          ← Back to Journals
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto w-11/12 md:w-3/4 bg-slate-50 rounded-lg shadow-md border border-slate-200 px-6 sm:px-10 py-8">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-sky-950 mb-4">
          {journal.attributes.Title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-slate-300">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-slate-500">Published on {formattedDate}</p>
            <p className="text-sm font-medium text-slate-700">
              Author: <span className="text-sky-700">{authorName}</span>
            </p>
          </div>
        </div>

        {/* Thumbnail */}
        {journal.attributes.Thumbnail && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-sm">
            <img
              src={journal.attributes.Thumbnail}
              alt={journal.attributes.Title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">Overview</h2>
          <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
            {journal.attributes.Description}
          </p>
        </div>

        {/* Achievement Paragraphs */}
        {journal.attributes.AchivmentParagraph && journal.attributes.AchivmentParagraph.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-sky-900 mb-4">Details</h2>
            <div className="space-y-4">
              {journal.attributes.AchivmentParagraph.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-700 leading-relaxed whitespace-pre-wrap"
                >
                  {typeof paragraph === "string"
                    ? paragraph
                    : paragraph.text || JSON.stringify(paragraph)}
                </p>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-6 border-t border-slate-300">
          {journal.attributes.Link ? (
            <a
              href={journal.attributes.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-sky-600 text-white py-3 px-6 rounded-md shadow-sm hover:bg-sky-700 hover:shadow transition-all duration-300 font-medium text-center"
            >
              View Full Paper
            </a>
          ) : (
            <button
              disabled
              className="flex-1 bg-slate-300 text-slate-500 py-3 px-6 rounded-md font-medium cursor-not-allowed text-center"
            >
              No Paper Link Available
            </button>
          )}

          {journal.attributes.Pdf && (
            <a
              href={journal.attributes.Pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-200 text-slate-700 py-3 px-6 rounded-md shadow-sm hover:bg-slate-300 hover:shadow transition-all duration-300 font-medium text-center"
            >
              Download PDF
            </a>
          )}
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="max-w-4xl mx-auto w-11/12 md:w-3/4 mt-8 mb-8">
        <Link
          href="/Achievements/Journals"
          className="text-sky-600 hover:text-sky-800 underline text-sm"
        >
          ← Back to All Journals
        </Link>
      </div>
    </div>
  );
}
