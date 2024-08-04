"use client";
import students from "../data";
import { motion } from "framer-motion";
import Button from "@/app/(routes)/Research/_components/Button";

const StudentPage = ({ params }) => {
  const { rollNumber } = params;

  // Find the student data based on rollNumber
  const student = students.find((s) => s.rollNumber === rollNumber);

  if (!student) {
    return <p className="text-center text-red-500">Student not found</p>;
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
        </div>
        <img
          src={student.photo}
          alt={`${student.name}'s photo`}
          className="mx-auto rounded-lg shadow-lg mb-4"
        />
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

        <Button text={"View Resume"} href={student.resumeButton} />
      </motion.div>
    </div>
  );
};

export default StudentPage;
