import React from 'react';
import styles from './InternationalJournal.module.css';

const InternationalJournal = () => {
  // Dummy data for international journal papers
  const papers = [
    { title: 'Paper 1', link: '/paper1' },
    { title: 'Paper 2', link: '/paper2' },
  ];

  return (
    <div className={styles.internationalJournal}>
      <h3>International Journal Papers</h3>
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

export default InternationalJournal;
