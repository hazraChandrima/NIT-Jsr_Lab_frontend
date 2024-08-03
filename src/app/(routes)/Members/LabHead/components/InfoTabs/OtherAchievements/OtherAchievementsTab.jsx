"use client"
import React, { useState, useEffect } from "react";import styles from './OtherAchievementsTab.module.css';

const OtherAchievementsTab = () => {
  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const activitiesData = await fetch(
        `https://www.nitjsr.ac.in/backend/faculty/get_other_activities/CS103`
      );
      const res = await activitiesData.json()  
      setActivities(res.result);
      setIsLoading(false);
    };

    getData();
  }, []);

  return (
    <div className={styles.otherAchievementsTab}>
      {isLoading?<>Loading Data</>:<>
        <h2>Other Academic Achievements</h2>
      <ul>
      {activities &&
        activities.map((activity) => {
          console.log("activity", activities);
          
          return (
            <div
              dangerouslySetInnerHTML={{ __html: activity.activities }}
              key={activity.id}
              className="profile-section"
            ></div>
          );
        })}
        {activities.length === 0 ? ("Nothing Found") : null}
      </ul>
      </>} 
    </div>
  );
};

export default OtherAchievementsTab;
