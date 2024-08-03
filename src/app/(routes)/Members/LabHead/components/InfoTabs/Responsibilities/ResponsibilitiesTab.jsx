"use client";

import React, { useEffect, useState } from "react";
import styles from "./ResponsibilitiesTab.module.css";

const ResponsibilitiesTab = () => {
  const [responsibility, setResponsibility] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const resData = await fetch(
        `https://nitjsr.ac.in/backend/api/people/responsibility?id=CS103`
      );
      const result = await resData.json();
      setResponsibility(result);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div className={styles.responsibilitiesTab}>
      {isLoading ? (
        <>Loading please wait</>
      ) : (
        <>
          <p
        className="px-4 text-bold font-semibold "
      >
        {responsibility.length === 0 ? ("Nothing Found") : null}
      {responsibility &&
        responsibility.map((res) => {
          return (
            <div
              dangerouslySetInnerHTML={{ __html: res.ds }}
              key={res.ds}
            ></div>
          );
        })}
      </p>
      

        </>
      )}
    </div>
  );
};

export default ResponsibilitiesTab;
