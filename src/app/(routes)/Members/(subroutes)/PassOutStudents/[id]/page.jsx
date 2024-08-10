"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/app/(routes)/Research/_components/Button"; // Update import path if needed

const PassoutStudentPage = ({ params }) => {
  const { id } = params;
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(
          `https://cozy-captain-963d285ad5.strapiapp.com/api/members/${id}?populate=*`
        );
        const result = await response.json();

        if (result.data) {
          const studentData = result.data.attributes;
          setStudent({
            name: studentData.name,
            role: studentData.role,
            position: studentData.position,
            about: studentData.about,
            photo: studentData.profilePhoto?.data?.attributes?.url,
            researches: studentData.researchList
              .map((r) => r.research)
              .filter(Boolean),
            projects: studentData.projectList
              .map((p) => p.project)
              .filter(Boolean),
          });
        } else {
          setError("Student not found");
        }
      } catch (err) {
        setError("Failed to fetch student data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">{student.name}</h1>
          <h2 className="text-xl font-semibold text-gray-600">
            {student.role} - {student.position || "N/A"}
          </h2>
        </div>
        {student?.photo && (
          <div className="flex justify-center mb-4">
            <img
              src={student.photo}
              alt={`${student.name}'s photo`}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg"
            />
          </div>
        )}
        <div className="flex flex-col items-start max-w-[600px] mx-auto mb-6">
          <h3 className="font-serif text-md text-gray-700 tracking-wide font-bold mb-2">
            About
          </h3>
          <p className="text-sm text-gray-700 tracking-wider">
            {student.about}
          </p>
        </div>
        <div className="flex flex-col items-start max-w-[600px] mx-auto mb-6">
          <h3 className="font-serif text-md text-gray-700 tracking-wide font-bold mb-2">
            Researches
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 tracking-wider">
            {student.researches.map((research, index) => (
              <li key={index} className="mb-2">
                {research}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start max-w-[600px] mx-auto mb-6">
          <h3 className="font-serif text-md text-gray-700 tracking-wide font-bold mb-2">
            Projects
          </h3>
          <ul className="list-disc pl-5 text-sm text-gray-700 tracking-wider">
            {student.projects.map((project, index) => (
              <li key={index} className="mb-2">
                {project}
              </li>
            ))}
          </ul>
        </div>
        <Button text={"Contact"} href={`mailto:contact@example.com`} />{" "}
        {/* Replace with actual contact link if available */}
      </motion.div>
    </div>
  );
};

export default PassoutStudentPage;
