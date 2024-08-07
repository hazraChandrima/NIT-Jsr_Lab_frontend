'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaEye } from 'react-icons/fa';
import InfoTabs from './InfoTabs';
import { getFileURL } from '@/utils/functions';

const ProfilePage = () => {
  const [people, setPeople] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const activitiesData = await fetch(
        `https://nitjsr.ac.in/backend/api/people/faculty?id=CS103`
      );
      const res = await activitiesData.json();
      setPeople(res[0]);
      setIsLoading(false);
    };

    getData();
  }, []);

  const togglePreview = () => {
    setIsPreviewVisible(!isPreviewVisible);
    console.log('People', people);
  };

  return (
    <div className="p-5">
      {isLoading ? (
        <div>Loading Profile</div>
      ) : (
        <>
          <div className="flex flex-col items-center text-center">
            <div className="relative w-40 h-40">
              <Image
                src={getFileURL(people.profile)}
                alt={`${people.fname} ${people.lname}'s profile picture`}
                layout="fill"
                className="rounded-full object-left-top object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={togglePreview}
              >
                <FaEye className="text-white text-2xl" />
                <span className="text-white ml-2">Preview</span>
              </div>
            </div>
            <h1 className="mt-8 mb-6 text-2xl font-bold">
              {people.fname} {people.lname}
            </h1>
            <div className="px-4">
              <p
                dangerouslySetInnerHTML={{ __html: people.bio }}
                className="mt-2 text-gray-600"
              ></p>
            </div>
          </div>
          <InfoTabs />

          {isPreviewVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
              <div className="relative">
                <button
                  className="absolute top-2 right-2 text-white text-2xl"
                  onClick={togglePreview}
                >
                  &times;
                </button>
                <Image
                  src={getFileURL(people.profile)}
                  alt="Image preview"
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProfilePage;
