import React from 'react';
import styles from './BookChapters.module.css';

const BookChapters = () => {
  // Dummy data for book chapters
  const chapters = [
    { title: 'Chapter 1', link: '/chapter1' },
    { title: 'Chapter 2', link: '/chapter2' },
  ];

  return (
    <div className={styles.bookChapters}>
      <h3>Book Chapters</h3>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index}>
            <a href={chapter.link}>{chapter.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookChapters;
