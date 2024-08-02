import React from 'react';
import styles from './ResearchAreaTab.module.css';

const ResearchAreaTab = () => {
  // Dummy data for Research Area and Societies
  const researchAreas = ['AI and Machine Learning', 'Data Science', 'Cyber Security'];
  const societies = ['IEEE', 'ACM', 'AI Society'];

  return (
    <div className={styles.researchAreaTab}>
      <h2>Research Areas</h2>
      <ul>
        {researchAreas.map((area, index) => (
          <li key={index}>{area}</li>
        ))}
      </ul>
      <h2>Societies</h2>
      <ul>
        {societies.map((society, index) => (
          <li key={index}>{society}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResearchAreaTab;
