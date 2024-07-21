// pages/index.js

import TeamComponent from "./Cards";



const teamMembers = [
  {
    title: 'Research Item 1',
    description: 'Description 1',
    link:"/Research/ResearchItem1",
    imageUrl: 'https://as2.ftcdn.net/v2/jpg/04/16/53/43/1000_F_416534332_NsxeQl4UlyjsUs80Tx0pYIJU7PrO8A3M.jpg',
  },
  {
    title: 'Research Item 2',
    description: 'Description 2',
    link:"/Research/ResearchItem2",
    imageUrl: 'https://as2.ftcdn.net/v2/jpg/04/16/53/43/1000_F_416534332_NsxeQl4UlyjsUs80Tx0pYIJU7PrO8A3M.jpg',
  },
  {
    title: 'Research Item 3',
    description: 'Description 3',
    link:"/Research/ResearchItem3",
    imageUrl: 'https://as2.ftcdn.net/v2/jpg/04/16/53/43/1000_F_416534332_NsxeQl4UlyjsUs80Tx0pYIJU7PrO8A3M.jpg',
  },
  {
    title: 'Research Item 4',
    description: 'Description 4',
    link:"/Research/ResearchItem4",
    imageUrl: 'https://as2.ftcdn.net/v2/jpg/04/16/53/43/1000_F_416534332_NsxeQl4UlyjsUs80Tx0pYIJU7PrO8A3M.jpg',
    
  },
  {
    title: 'Research Item 2',
    description: 'Description 2',
    link:"/Research/ResearchItem5",
    imageUrl: 'https://as2.ftcdn.net/v2/jpg/04/16/53/43/1000_F_416534332_NsxeQl4UlyjsUs80Tx0pYIJU7PrO8A3M.jpg',
  },
  {
    title: 'Research Item 3',
    description: 'Description 3',
    link:"/Research/ResearchItem1",
    imageUrl: 'https://as2.ftcdn.net/v2/jpg/04/16/53/43/1000_F_416534332_NsxeQl4UlyjsUs80Tx0pYIJU7PrO8A3M.jpg',
  },
  {
    title: 'Research Item 4',
    description: 'Description 4',
    link:"/Research/ResearchItem2",
    imageUrl: 'https://as2.ftcdn.net/v2/jpg/04/16/53/43/1000_F_416534332_NsxeQl4UlyjsUs80Tx0pYIJU7PrO8A3M.jpg',
    
  },
];

export default function TeamSection() {
  return (
    <main className="min-h-screen w-full ">
    <div className="min-h-dvh text-white px-10  py-5">

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
