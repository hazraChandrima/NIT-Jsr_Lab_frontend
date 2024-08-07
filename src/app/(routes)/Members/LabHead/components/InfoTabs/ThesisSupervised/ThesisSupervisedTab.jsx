'use client';

import React, { useState, useEffect } from 'react';
import PHDTab from './PHDTab';
import MastersTab from './MastersTab';
import BachelorsTab from './BachelorsTab';
import styles from './ThesisSupervisedTab.module.css';

const SUB_TABS = [
  { name: 'PhD', component: PHDTab },
  { name: 'Masters', component: MastersTab },
  { name: 'Bachelors', component: BachelorsTab },
];

const ThesisSupervisedTab = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response1 = await fetch('https://www.nitjsr.ac.in/backend/api/thesissupervised/phd?id=CS103');
        const result1 = await response1.json();
        result1.sort((x,y)=>y.completion_year - x.completion_year)
        setData(result1);

        const response2 = await fetch('https://www.nitjsr.ac.in/backend/api/thesissupervised/mtech?id=CS103');
        const result2 = await response2.json();
        result2.sort((x,y)=>y.completion_year - x.completion_year)
        setData2(result2);

        const response3 = await fetch('https://www.nitjsr.ac.in/backend/api/thesissupervised/btech?id=CS103');
        const result3 = await response3.json();
        result3.sort((x,y)=>y.completion_year - x.completion_year)
        setData3(result3);

        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Stop loading even if there's an error
      }
    };

    getData();
  }, []);

  const [activeSubTab, setActiveSubTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  const renderSubTabContent = () => {
    const propData = SUB_TABS[activeSubTab].name =='PhD'?data:SUB_TABS[activeSubTab].name =='Masters'?data2:data3;
    const ActiveComponent = SUB_TABS[activeSubTab].component;
    return <ActiveComponent data={propData} />;
  };

  return (
    <div className={styles.thesisSupervisedTab}>
      {loading ? (
        <div>Loading Data...</div>
      ) : (
        <>
          <div className="relative">
            <div className="flex space-x-4 mb-4 whitespace-nowrap overflow-auto">
              {SUB_TABS.map((subTab, index) => (
                <button
                  key={index}
                  className={`relative py-2 text-sm font-medium transition duration-300 border-b-2 ${
                    activeSubTab === index
                      ? 'text-sky-600 border-blue-300'
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
          <div className={styles.subTabsContent}>{renderSubTabContent()}</div>
        </>
      )}
    </div>
  );
};

export default ThesisSupervisedTab;
