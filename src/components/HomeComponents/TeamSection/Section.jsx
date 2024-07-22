// pages/index.js

import TeamComponent from "./Cards";



const teamMembers = [
  {
    title: 'Research Item 1',
    description: 'Description 1',
    link:"/Research/ResearchItem1",
    imageUrl: 'https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg',
  },
  {
    title: 'Research Item 2',
    description: 'Description 2',
    link:"/Research/ResearchItem2",
    imageUrl: 'https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg',
  },
  {
    title: 'Research Item 3',
    description: 'Description 3',
    link:"/Research/ResearchItem3",
    imageUrl: 'https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg',
  },
  {
    title: 'Research Item 4',
    description: 'Description 4',
    link:"/Research/ResearchItem4",
    imageUrl: 'https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg',
    
  },
  {
    title: 'Research Item 2',
    description: 'Description 2',
    link:"/Research/ResearchItem5",
    imageUrl: 'https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg',
  },
  {
    title: 'Research Item 3',
    description: 'Description 3',
    link:"/Research/ResearchItem1",
    imageUrl: 'https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg',
  },
  {
    title: 'Research Item 4',
    description: 'Description 4',
    link:"/Research/ResearchItem2",
    imageUrl: 'https://www.mccmdclinic.org/wp-content/uploads/2020/01/Microscope.jpg',
    
  },
];

export default function TeamSection() {
  return (
    <main className="min-h-screen w-full ">
      
    <div className="min-h-dvh text-white px-7 py-5">
    <h1 className="text-6xl font-sans text-sky-900 font-light text-right relative mb-5 mt-10 right-2">RESEARCH </h1>
      <h2 className="text-2xl font-sans text-slate-700 font-light text-right relative mb-20 right-3"> - research contents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {teamMembers.map((member, index) => (
          <TeamComponent
            key={index}
            title={member.title}
            link={member.link}
            description={member.description}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  </main>
  );
}
