import React from 'react';
import styles from './OtherAchievementsTab.module.css';

const OtherAchievementsTab = () => {
  // Dummy data for other academic achievements
  const achievements = ['Awarded Best Researcher 2021', 'Member of Editorial Board, XYZ Journal'];

  return (
    <div className={styles.otherAchievementsTab}>
      <h2>Other Academic Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default OtherAchievementsTab;
