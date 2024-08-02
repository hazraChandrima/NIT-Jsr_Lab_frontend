import React from 'react';
import styles from './Books.module.css';

const Books = () => {
  // Dummy data for books
  const books = [
    { title: 'Book 1', link: '/book1' },
    { title: 'Book 2', link: '/book2' },
  ];

  return (
    <div className={styles.books}>
      <h3>Books</h3>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <a href={book.link}>{book.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
