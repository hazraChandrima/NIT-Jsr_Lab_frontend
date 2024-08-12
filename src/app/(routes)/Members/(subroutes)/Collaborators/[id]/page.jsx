"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/app/(routes)/Research/_components/Button"; // Update import path if needed

const CollaboratorPage = ({ params }) => {
  const { id } = params;
  const [collaborator, setCollaborator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollaboratorData = async () => {
      try {
        const response = await fetch(
          `https://cozy-captain-963d285ad5.strapiapp.com/api/members/${id}?populate=*`
        );
        const result = await response.json();

        if (result.data) {
          const collaboratorData = result.data.attributes;
          setCollaborator({
            name: collaboratorData.name,
            role: collaboratorData.role,
            position: collaboratorData.position,
            about: collaboratorData.about,
            photo: collaboratorData.profilePhoto?.data?.attributes?.url,
            researches: collaboratorData.researchList
              .map((r) => r.research)
              .filter(Boolean),
            projects: collaboratorData.projectList
              .map((p) => p.project)
              .filter(Boolean),
          });
        } else {
          setError("Collaborator not found");
        }
      } catch (err) {
        setError("Failed to fetch collaborator data");
      } finally {
        setLoading(false);
      }
    };

    fetchCollaboratorData();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 my-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-4">
          <h1 className="text-3xl font-sans font-bold">{collaborator.name}</h1>
          <h2 className="text-xl font-sans font-semibold text-gray-600">
            {collaborator.role} - {collaborator.position}
          </h2>
        </div>
        {collaborator?.photo && (
          <div className="flex justify-center mb-4">
            <img
              src={collaborator.photo}
              alt={`${collaborator.name}'s photo`}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
            />
          </div>
        )}
        <div className="flex flex-col items-start max-w-[600px] mx-auto mb-6">
          <h3 className="font-sans text-lg text-gray-700 tracking-wide font-semibold mb-2">
            About
          </h3>
          <p className="text-sm text-gray-700 tracking-wider">
            {collaborator.about}
          </p>
        </div>
        <div className="flex flex-col items-start max-w-[600px] mx-auto mb-6">
          <h3 className="font-sans text-lg text-gray-700 tracking-wide font-semibold mb-2">
            Researches
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 tracking-wider">
            {collaborator.researches.map((research, index) => (
              <li key={index} className="mb-2">
                {research}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start max-w-[600px] mx-auto mb-6">
          <h3 className="font-sans text-lg text-gray-700 tracking-wide font-semibold mb-2">
            Projects
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 tracking-wider">
            {collaborator.projects.map((project, index) => (
              <li key={index} className="mb-2">
                {project}
              </li>
            ))}
          </ul>
        </div>
        <Button text={"Contact"} href={`mailto:contact@example.com`} />{" "}
      </motion.div>
    </div>
  );
};

export default CollaboratorPage;
