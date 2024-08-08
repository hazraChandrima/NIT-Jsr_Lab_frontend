import React from 'react';
import styles from './SocietyList.module.css';

const SocietyList = ({ societies }) => {
  return (
    <div className={styles.societyList}>
      <h3 className='text-sky-800'>Societies</h3>
      <ul>
        {societies.map((society, index) => (
          <li key={index}>{society.member}</li>
        ))}
      </ul>
    </div>
  );
};

export default SocietyList;
