import React from 'react';
import styles from './InternationalConference.module.css';

const InternationalConference = () => {
  // Dummy data for international conference papers
  const papers = [
    { title: 'Conference Paper 1', link: '/conference1' },
    { title: 'Conference Paper 2', link: '/conference2' },
  ];

  return (
    <div className={styles.internationalConference}>
      <h3>International Conference Papers</h3>
      <ul>
        {papers.map((paper, index) => (
          <li key={index}>
            <a href={paper.link}>{paper.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternationalConference;
