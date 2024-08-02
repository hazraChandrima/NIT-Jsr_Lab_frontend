import React from 'react';
import styles from './MastersTab.module.css';

const MastersTab = () => {
  // Dummy data for Masters theses
  const theses = [
    { topic: 'Machine Learning Models', student: 'Charlie', year: 2019 },
    { topic: 'Big Data Analytics', student: 'David', year: 2020 },
  ];

  return (
    <div className={styles.mastersTab}>
      <h3>Masters Theses Supervised</h3>
      <table>
        <thead>
          <tr>
            <th>Research Topic</th>
            <th>Student</th>
            <th>Year of Completion</th>
          </tr>
        </thead>
        <tbody>
          {theses.map((thesis, index) => (
            <tr key={index}>
              <td>{thesis.topic}</td>
              <td>{thesis.student}</td>
              <td>{thesis.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MastersTab;
