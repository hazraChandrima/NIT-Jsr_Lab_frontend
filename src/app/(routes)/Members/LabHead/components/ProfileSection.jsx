'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import InfoTabs from './InfoTabs';

const ProfilePage = () => {
  const faculty = {
    name: 'John Doe',
    title: 'Professor of Computer Science',
    image: 'https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg',
    bio: 'Dr. John Doe is a Professor of Computer Science at XYZ University. He has been teaching and researching in the fields of Artificial Intelligence and Machine Learning for over 20 years. He has published numerous papers in top-tier journals and conferences.Dr. John Doe is a Professor of Computer Science at XYZ University. He has been teaching and researching in the fields of Artificial Intelligence and Machine Learning for over 20 years. He has published numerous papers in top-tier journals and conferences.',
  };

  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const togglePreview = () => {
    setIsPreviewVisible(!isPreviewVisible);
  };

  return (
    <div className="p-5">
      <div className="flex flex-col items-center text-center">
        <div className="relative group">
          <Image
            src={faculty.image}
            alt={`${faculty.name}'s profile picture`}
            width={150}
            height={150}
            className="rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer" onClick={togglePreview}>
            <FaEye className="text-white text-2xl" />
            <span className="text-white ml-2">Preview</span>
          </div>
        </div>
        <h1 className="mt-4 text-2xl font-bold">{faculty.name}</h1>
        <div className=' px-4'>
        <p className="mt-2 text-gray-600">{faculty.bio}</p>
        </div>
      </div>
      <InfoTabs />

      {isPreviewVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button className="absolute top-2 right-2 text-white text-2xl" onClick={togglePreview}>
              &times;
            </button>
            <Image src={faculty.image} alt="Image preview" width={600} height={600} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
