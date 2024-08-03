import React from 'react';
import styles from './BachelorsTab.module.css';

const BachelorsTab = () => {
  // Dummy data for Bachelors theses
  const theses = [
    { topic: 'Web Development', student: 'Eve', year: 2018 },
    { topic: 'Mobile App Development', student: 'Frank', year: 2019 },
  ];

  return (
    <div className={styles.bachelorsTab}>
      <h3>Bachelors Theses Supervised</h3>
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

export default BachelorsTab;
