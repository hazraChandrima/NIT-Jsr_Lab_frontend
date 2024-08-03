
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './MastersTab.module.css';

const MastersTab = ({data}) => { 
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const theses = data || [
    { research_topic: 'NO Thesis Supervised', name_of_student: 'N/A', year: 0 },
  ];

  // Calculate the offset and the current page's data
  const offset = currentPage * itemsPerPage;
  const currentData = theses.slice(offset, offset + itemsPerPage);

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

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
          {currentData.map((thesis, index) => (
            <tr key={index}>
              <td>{thesis.research_topic}</td>
              <td>{thesis.name_of_student}</td>
              <td>{thesis.completion_year ? thesis.completion_year : 'Ongoing'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        breakLabel={'...'}
        breakClassName={styles.breakMe}
        pageCount={Math.ceil(theses.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        pageClassName={styles.page}
        previousClassName={styles.previous}
        nextClassName={styles.next}
      />
    </div>
  );
};

export default MastersTab;
