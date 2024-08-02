import React from 'react';
import styles from './TeachingsTab.module.css';

const TeachingsTab = () => {
  // Dummy data for teachings
  const courses = ['Introduction to AI', 'Advanced Data Science', 'Cyber Security Fundamentals'];

  return (
    <div className={styles.teachingsTab}>
      <h2>Courses Taught</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeachingsTab;
