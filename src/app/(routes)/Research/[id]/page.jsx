"use client";

import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import { fetchData } from "@/utils/fetchData";
import ResearchHero from "../_components/ResearchHero/ResearchHero";
import Theme from "../_components/Theme";
import Content from "../_components/Content";
import ResearchMembers from "../_components/ResearchMembersSection";
import ResearchSummary from "../_components/ResearchSummary";
import Breadcrumbs from "../_components/Breadcrumbs";
import ResearchPapers from "../_components/ResearchPapers";

const ResearchItem = ({ params }) => {
  const { id } = params;
  const [researchItem, setResearchItem] = useState(null);
  const [Images, setImages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResearchItem = async () => {
      const data = await fetchData(
        `https://cozy-captain-963d285ad5.strapiapp.com/api/research-sections/${id}?populate=*`
      );
      const imageData = await fetchData(
        `https://cozy-captain-963d285ad5.strapiapp.com/api/research-sections/${id}?populate[0]=ReasearchContent.Image&populate[1]=AimAndSummary.Image`
      );
      const researchContentImages =
        imageData.data.attributes.ReasearchContent.map(
          (content) => content.Image?.data?.attributes || null
        );

      const aimAndSummaryImages = imageData.data.attributes.AimAndSummary.map(
        (summary) => summary.Image?.data?.attributes || null
      );

      setImages({ researchContentImages, aimAndSummaryImages });
      setResearchItem(data.data);
      setLoading(false);
    };

    fetchResearchItem();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!researchItem) {
    return notFound();
  }

  const {
    ResearchTitle,
    ResearchSubTitle,
    Description,
    Thumbnail,
    Themes,
    Members,
    PapersPublished,
    AimAndSummary,
    ReasearchContent,
  } = researchItem.attributes;

  // Extracting image URLs for Thumbnail, AimAndSummary, and ReasearchContent
  const thumbnailImage = Thumbnail?.data?.attributes || null;

  return (
    <div>
      <ResearchHero
        title={ResearchTitle}
        subtitle={ResearchSubTitle}
        imageUrl={thumbnailImage}
      />
      <Breadcrumbs />
      <Theme
        themes={Themes.map((theme) => theme.Theme)}
        heading={Description}
      />
      <Content
        link={ReasearchContent[0].Link}
        text={ReasearchContent[0].ReasearchContent}
        imageUrl={Images.researchContentImages}
        thumbnailImage={thumbnailImage}
      />
      <ResearchPapers papers={PapersPublished} />
      <ResearchMembers membersList={Members.map((member) => member.Members)} />
      <ResearchSummary
        summary={AimAndSummary[0].SummaryAim}
        imageUrl={Images.aimAndSummaryImages} // As there is no image provided for AimAndSummary
      />
    </div>
  );
};

export default ResearchItem;

// "use client";
// import { notFound } from "next/navigation"; // For handling not found scenarios
// import researchData from "../data";
// import ResearchHero from "../_components/ResearchHero/ResearchHero";
// import Theme from "../_components/Theme";
// import Content from "../_components/Content";
// import ResearchMembers from "../_components/ResearchMembersSection";
// import ResearchSummary from "../_components/ResearchSummary";
// import Breadcrumbs from "../_components/Breadcrumbs";
// import ResearchPapers from "../_components/ResearchPapers";

// const ResearchItem = ({ params }) => {
//   const { id } = params;
//   const researchItem = researchData.find((item) => item.id.toString() === id);

//   return (
//     <div>
//       <ResearchHero
//         title={researchItem.title}
//         subtitle={researchItem.subtitle}
//       />
//       <Breadcrumbs />
//       <Theme themes={researchItem.themes} heading={researchItem.heading} />
//       <Content content={researchItem.content} />
//       <ResearchPapers papers={researchItem.papers} />
//       <ResearchMembers membersList={researchItem.members} />
//       <ResearchSummary summary={researchItem.summary} />
//     </div>
//   );
// };

// export default ResearchItem;

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
