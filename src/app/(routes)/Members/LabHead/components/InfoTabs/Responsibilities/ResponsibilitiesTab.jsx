import React from 'react';
import styles from './ResponsibilitiesTab.module.css';

const ResponsibilitiesTab = () => {
  // Dummy data for responsibilities
  const responsibilities = ['Head of Department', 'Coordinator of AI Research Group'];

  return (
    <div className={styles.responsibilitiesTab}>
      <h2>Responsibilities</h2>
      <ul>
        {responsibilities.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResponsibilitiesTab;
