"use client";
import { notFound } from "next/navigation"; // For handling not found scenarios
import researchData from "../data";
import ResearchHero from "../_components/ResearchHero/ResearchHero";
import Theme from "../_components/Theme";
import Content from "../_components/Content";
import ResearchMembers from "../_components/ResearchMembersSection";
import ResearchSummary from "../_components/ResearchSummary";
import ResearchPapers from "../_components/ResearchPapers";

const ResearchItem = ({ params }) => {
  const { id } = params;
  const researchItem = researchData.find((item) => item.id.toString() === id);

  return (
    <div>
      <ResearchHero
        title={researchItem.title}
        subtitle={researchItem.subtitle}
      />
      <Theme themes={researchItem.themes} heading={researchItem.heading} />
      <Content content={researchItem.content} />
      <ResearchPapers papers={researchItem.papers} />
      <ResearchMembers membersList={researchItem.members} />
      <ResearchSummary summary={researchItem.summary} />
    </div>
  );
  //   if (!researchItem) {
  //     return notFound(); // Show 404 page if item not found
  //   }
  //   return (
  //     <div className="p-4">
  //       <h1 className="text-3xl font-bold">{researchItem.title}</h1>
  //       <h2 className="text-xl font-semibold mt-2">{researchItem.subtitle}</h2>
  //       <img
  //         src={researchItem.imageUrl}
  //         alt={researchItem.title}
  //         className="w-full h-64 object-cover mt-4"
  //       />
  //       <p className="mt-4">{researchItem.content}</p>
  //       <p className="mt-2">
  //         <strong>Summary:</strong> {researchItem.summary}
  //       </p>
  //       <p className="mt-2">
  //         <strong>Aim:</strong> {researchItem.aim}
  //       </p>
  //       <p className="mt-2">
  //         <strong>Members:</strong> {researchItem.members.join(", ")}
  //       </p>
  //       <div className="mt-4">
  //         <h3 className="text-xl font-semibold">Papers:</h3>
  //         <ul>
  //           {researchItem.papers.map((paper, index) => (
  //             <li key={index} className="mt-2">
  //               <strong>{paper.title}</strong> by {paper.authors.join(", ")}{" "}
  //               (Published in {paper.publishedIn}, {paper.year})
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   );
};

export default ResearchItem;
