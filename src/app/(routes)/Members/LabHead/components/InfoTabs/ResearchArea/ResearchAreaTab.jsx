"use client";

import React, { useEffect, useState } from "react";
import styles from "./ResearchAreaTab.module.css";
import SocietyList from "./SocietyList";

const ResearchAreaTab = () => {
  const [research, setResearch] = useState([]);
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      try {
        const memberData = await fetch(
          `https://nitjsr.ac.in/backend/api/members?id=CS103`
        );
        const memberRes = await memberData.json();
        setMember(memberRes.result);

        const researchData = await fetch(
          `https://nitjsr.ac.in/backend/api/research?id=CS103`
        );
        const researchRes = await researchData.json();
        setResearch(researchRes.result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className={styles.researchAreaTab}>
      {loading ? (
        <>
          <div>Loading Data..</div>
        </>
      ) : (
        <>
          <h2 className="text-sky-800">Research Areas</h2>
          <ul>
            {research.map((value, index) => (
              <li key={index}>{value.topic}</li>
            ))}
          </ul>
          <SocietyList societies={member} />
        </>
      )}
    </div>
  );
};

export default ResearchAreaTab;
