"use client"

import React, { useState } from 'react';
import InternationalJournal from './InternationalJournal';
import InternationalConference from './InternationalConference';
import BookChapters from './BookChapters';
import Books from './Books';
import styles from './ResearchPublicationsTab.module.css';

const SUB_TABS = [
  { name: 'International Journal Papers', component: InternationalJournal },
  { name: 'International Conference Papers', component: InternationalConference },
  { name: 'Book Chapters', component: BookChapters },
  { name: 'Books', component: Books },
];

const ResearchPublicationsTab = () => {
  const [activeSubTab, setActiveSubTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);


  const renderSubTabContent = () => {
    const ActiveComponent = SUB_TABS[activeSubTab].component;
    return <ActiveComponent />;
  };

  return (
    <div className={styles.researchPublicationsTab}>
      <div className="relative">
        <div className="flex space-x-4 mb-4 whitespace-nowrap">
          {SUB_TABS.map((subTab, index) => (
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
        {renderSubTabContent()}
      </div>
    </div>
  );
};

export default ResearchPublicationsTab;
