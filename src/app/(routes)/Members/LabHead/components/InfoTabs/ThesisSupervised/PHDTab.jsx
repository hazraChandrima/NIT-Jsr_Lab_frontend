import React from 'react';
import styles from './PHDTab.module.css';

const PHDTab = () => {
  // Dummy data for PhD theses
  const theses = [
    { topic: 'AI in Healthcare', student: 'Alice', year: 2020 },
    { topic: 'Data Science Applications', student: 'Bob', year: 2021 },
  ];

  return (
    <div className={styles.phdTab}>
      <h3>PhD Theses Supervised</h3>
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

export default PHDTab;
