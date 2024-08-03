"use client"

import React, { useState,useEffect } from 'react';
import InternationalJournal from './InternationalJournal';
import InternationalConference from './InternationalConference';
import BookChapters from './BookChapters';
import Books from './Books';
import styles from './ResearchPublicationsTab.module.css';

const pubTypes = [
  { name: 'International Journal Papers', component: InternationalJournal,key: "ijp",value: "International Journal Paper", },
  { key: "icp", name: 'International Conference Papers', component: InternationalConference,text: "International Conference Paper",
    value: "International Conference Paper", },
  { name: 'Book Chapters', component: BookChapters,key: "bkc",
    text: "Book Chapters",
    value: "Book Chapters", },
  { name: 'Books', component: Books,key: "bk", text: "Book", value: "Book" },
];

const ResearchPublicationsTab = () => {
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);
  const [publications, setPublications] = useState([]);
  const [publicationLoaded, setPublicationLoaded] = useState(false);

  const renderSubTabContent = (publications) => {
   
    const propData = publications.filter((pub)=> pub?.type ==pubTypes[activeSubTab].value)
    const ActiveComponent = pubTypes[activeSubTab].component;
    return <ActiveComponent propData={propData} />;
  };

  useEffect(() => {
    const getData = async () => {
      const publicationsData = await fetch(`https://www.nitjsr.ac.in/backend/api/publications?id=CS103`);
      let a = await publicationsData.json();
      a=a.result;
      a.sort((a, b) => b.pub_date - a.pub_date);
      setPublications(a);
      setPublicationLoaded(true);
    };

    getData();
  }, []);


  return (
    <div className={styles.researchPublicationsTab}>
      <div className="relative overflow-scroll sm:overflow-hidden my-5">
        <div className="flex space-x-5 mb-4 whitespace-nowrap sm:justify-center">
          {pubTypes.map((subTab, index) => (
            <button
              key={index}
              className={`relative py-2 text-sm font-medium transition duration-300 border-b-2 ${
                activeSubTab === index
                  ? 'text-blue-600 border-blue-600'
                  : 'text-gray-700 border-transparent'
              } ${
                hoveredTab === index && activeSubTab !== index
                  ? 'border-black'
                  : ''
              }`}
              onClick={() => setActiveSubTab(index)}
              onMouseEnter={() => setHoveredTab(index)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {subTab.name}
              
            </button>
          ))}
        </div>
      </div>
      <div className={styles.subTabsContent}>
      {publicationLoaded ? (
        <>
          {publications.length === 0 ? (
            "No Publication Found"
          ) : (
                  renderSubTabContent(publications)
          )}
        </>
      ) : (
        <div>Loading content</div>
      )}
      </div>
    </div>
  );
};

export default ResearchPublicationsTab;
