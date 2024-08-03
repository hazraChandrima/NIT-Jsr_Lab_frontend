'use client';

import React, { useState } from 'react';
import ResearchAreaTab from './InfoTabs/ResearchArea/ResearchAreaTab';
import TeachingsTab from './InfoTabs/Teachings/TeachingsTab';
import ResearchPublicationsTab from './InfoTabs/ResearchPublications/ResearchPublicationsTab';
import ResponsibilitiesTab from './InfoTabs/Responsibilities/ResponsibilitiesTab';
import ThesisSupervisedTab from './InfoTabs/ThesisSupervised/ThesisSupervisedTab';
import OtherAchievementsTab from './InfoTabs/OtherAchievements/OtherAchievementsTab';
import ContactTab from './InfoTabs/Contact/ContactTab';

const TABS = [
  { name: 'Research Area', component: ResearchAreaTab },
  { name: 'Teachings', component: TeachingsTab },
  { name: 'Research Publications', component: ResearchPublicationsTab },
  { name: 'Responsibilities', component: ResponsibilitiesTab },
  { name: 'Thesis Supervised', component: ThesisSupervisedTab },
  { name: 'Other Achievements', component: OtherAchievementsTab },
  { name: 'Contact', component: ContactTab },
];

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredTab, setHoveredTab] = useState(null);

  const renderTabContent = () => {
    const ActiveComponent = TABS[activeTab].component;
    return <ActiveComponent />;
  };

  return (
    <div className="w-full px-5 p-4 pt-10">
      <div className="w-[90dvw] pr-7"> 

        <div className="flex overflow-scroll md:overflow-hidden md:justify-center space-x-5 mb-4 ">
          {TABS.map((tab, index) => (
            <button
              key={index}
              className={`py-2 text-sm font-medium transition duration-300 border-b ${
                activeTab === index
                  ? 'text-blue-600 border-blue-300 border-b-[3px]'
                  : 'text-gray-700 '
              } ${
                hoveredTab === index
                  ? 'border-b border-black'
                  : ''
              }`}
              onClick={() => setActiveTab(index)}
              onMouseEnter={() => setHoveredTab(index)}
              onMouseLeave={() => setHoveredTab(null)}
            >
              {tab.name}
            </button>
          ))}
        </div>
      
      </div>
      <div className="border-t border-gray-200 pt-4">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default InfoTabs;
