// pages/index.js

import TeamComponent from "./Cards";



const teamMembers = [
  {
    title: 'Team Member 1',
    description: 'Description 1',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/530806bbe4b01885d314f575/1425441723794-480XZ60GYSYM6HMFO61D/image-asset.jpeg',
  },
  {
    title: 'Team Member 2',
    description: 'Description 2',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/530806bbe4b01885d314f575/1425441723794-480XZ60GYSYM6HMFO61D/image-asset.jpeg',
  },
  {
    title: 'Team Member 3',
    description: 'Description 3',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/530806bbe4b01885d314f575/1425441723794-480XZ60GYSYM6HMFO61D/image-asset.jpeg',
  },
  {
    title: 'Team Member 4',
    description: 'Description 4',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0&h=180',
    
  },
  {
    title: 'Team Member 2',
    description: 'Description 2',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0&h=180',
  },
  {
    title: 'Team Member 3',
    description: 'Description 3',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0&h=180',
  },
  {
    title: 'Team Member 4',
    description: 'Description 4',
    imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.Z_PIeIRDajXPmZHROt-T_QHaEK&pid=Api&P=0&h=180',
    
  },
];

export default function TeamSection() {
  return (
    <main className="min-h-screen w-full bg-gray-800">
    <div className="min-h-dvh bg-slate-900 text-white px-10  py-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
        {teamMembers.map((member, index) => (
          <TeamComponent
            key={index}
            title={member.title}
            description={member.description}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  </main>
  );
}
