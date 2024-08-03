"use client"

import React, { useEffect, useState } from 'react';

import styles from './TeachingsTab.module.css';
import { getFileURL } from '@/utils/functions';

const TeachingsTab = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

 
  useEffect(() => {
    const getData = async () => {
      try {
        const response= await fetch('https://www.nitjsr.ac.in/backend/api/faculty_course?id=CS103')
        const result = await response.json();
        setData(result.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };
    getData();
    
  }, []);

  return (
    <div className={styles.teachingsTab}>
    <h2>Courses Taught</h2>
    {loading ? (
      <div className={styles.loading}>Loading Data...</div>
    ) : (
      <ul className={styles.courseList}>
        {data.map((value, index) => (
          <li className={styles.courseItem} key={index}>
            <a
              target="_blank"
              className={styles.courseLink}
              rel="noreferrer"
              href={getFileURL(value.course_handout)}
            >
              <div className={styles.courseHeader}>
                <b className={styles.courseName}>{value.course_name}</b> -{" "}
                <span className={styles.courseId}>{value.course_id}</span>
              </div>
              <div className={styles.courseFooter}>
                <span className={styles.semester}>Semester: {value.year}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
  );
};

export default TeachingsTab;
