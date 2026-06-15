"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function PatentDetailPage() {
  const params = useParams();
  const { id } = params;
  const [patent, setPatent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/patent/${id}?populate[docs][fields][0]=*&populate[head][fields][0]=*&populate[collaborators][fields][0]=*`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch patent details");
        }
        
        const data = await response.json();
        setPatent(data.data);
      } catch (err) {
        console.error("Error fetching patent:", err);
        setError(err.message || "Failed to load patent details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getData();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-dvh bg-white">
        <LoadingSpinner />
      </div>
    );
  }

  if (error || !patent) {
    return (
      <div className="flex flex-col bg-white py-5 min-h-dvh text-slate-600">
        <BreadCrumbs title={patent.attributes.title}/>
        <div className="flex flex-col items-center justify-center mt-20">
          <h1 className="text-2xl font-semibold text-red-600 mb-4">
            {error || "Patent not found"}
          </h1>
          <Link
            href="/Achievements/Patents"
            className="text-sky-600 hover:text-sky-800 underline"
          >
            Back to Patents
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(patent.attributes.date_of_publication).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const collaborators = patent.attributes.collaborators?.data || [];
  const headName = patent.attributes.head?.data?.attributes?.name || "Unknown";
  const docs = patent.attributes.docs?.data || [];

  return (
    <div className="flex flex-col bg-white py-5 min-h-dvh text-slate-600">
      <BreadCrumbs />
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto w-11/12 md:w-3/4 mt-8 mb-8">
        <Link
          href="/Achievements/Patents"
          className="text-sky-600 hover:text-sky-800 underline text-sm mb-4 inline-block"
        >
          ← Back to Patents
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto w-11/12 md:w-3/4 bg-slate-50 rounded-lg shadow-md border border-slate-200 px-6 sm:px-10 py-8">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-sky-950 mb-4">
          {patent.attributes.title}
        </h1>

        {/* Meta Information */}
        <div className="mb-8 pb-6 border-b border-slate-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-slate-500 mb-1">Published on</p>
              <p className="text-lg font-medium text-slate-800">{formattedDate}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-1">Patent Head</p>
              <p className="text-lg font-medium text-sky-700">{headName}</p>
            </div>
          </div>
        </div>

        {/* Cover Image */}
        {patent.attributes.cover_image && (
          <div className="mb-8 rounded-lg overflow-hidden shadow-sm">
            <img
              src={patent.attributes.cover_image}
              alt={patent.attributes.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">Description</h2>
          <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
            {patent.attributes.description || "No description available"}
          </p>
        </div>

        {/* Inventors/Collaborators */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-sky-900 mb-4">Inventors</h2>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            {collaborators.length > 0 ? (
              <ul className="space-y-2">
                {collaborators.map((collaborator, index) => (
                  <li
                    key={index}
                    className="flex items-center text-slate-700 py-2 border-b border-slate-100 last:border-b-0"
                  >
                    <span className="w-2 h-2 bg-sky-600 rounded-full mr-3"></span>
                    {collaborator.attributes?.name || "Unknown"}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-slate-500 italic">No inventors listed</p>
            )}
          </div>
        </div>

        {/* Documents/Links */}
        {docs.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-sky-900 mb-4">Documents</h2>
            <div className="space-y-3">
              {docs.map((doc, index) => (
                <a
                  key={index}
                  href={doc.attributes?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200 hover:border-sky-400 hover:bg-sky-50 transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 text-sky-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  <span className="flex-1 text-slate-700 hover:text-sky-700">
                    {doc.attributes?.name || doc.attributes?.url || "Document"}
                  </span>
                  <svg
                    className="w-4 h-4 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div className="max-w-4xl mx-auto w-11/12 md:w-3/4 mt-8 mb-8">
        <Link
          href="/Achievements/Patents"
          className="text-sky-600 hover:text-sky-800 underline text-sm"
        >
          ← Back to All Patents
        </Link>
      </div>
    </div>
  );
}
