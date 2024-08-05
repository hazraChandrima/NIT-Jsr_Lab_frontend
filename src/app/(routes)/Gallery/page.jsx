"use client";
import { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import lab1 from '@/assets/images/lab1.png';
import lab2 from '@/assets/images/lab2.png'
import nit from '@/assets/images/nit_jsr.jpeg';
import acad from '@/assets/images/old_acad.jpg';
const galleryData = {
  2024: {
    January: [
      {
        link:lab1,
        caption: 'New Year Celebration'
      },
      {
        link: nit,
        caption: 'Winter Landscape'
      }
    ],
    February: [
      {
        link:lab2,
        caption: 'Valentine’s Day Decorations'
      },
      {
        link: acad,
        caption: 'Winter Sports'
      }
    ],
    March: [
      {
        link: lab1,
        caption: 'Spring Blossoms'
      }
    ]
  },
  2023: {
    December: [
      {
        link: lab2,
        caption: 'Holiday Lights'
      },
      {
        link:nit,
        caption: 'Snowman Building'
      }
    ],
    November: [
      {
        link: acad,
        caption: 'Autumn Leaves'
      },
      {
        link:nit,
        caption: 'Thanksgiving Feast'
      }
    ],
    October: [
      {
        link:lab1,
        caption: 'Halloween Party'
      },
      {
        link: lab2,
        caption: 'Pumpkin Carving'
      }
    ]
  },
  2022: {
    September: [
      {
        link:nit,
        caption: 'Back to School'
      },
      {
        link: acad,
        caption: 'Fall Harvest'
      }
    ],
    August: [
      {
        link: lab1,
        caption: 'Summer Beach'
      }
    ],
    July: [
      {
        link: acad,
        caption: 'Summer Picnic'
      }
    ]
  }
};

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (link) => setSelectedImage(link);
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <h1 className='text-5xl font-sans font-light relative text-center right-6 text-sky-950'>GALLERY</h1>
      <div className="p-8">
        {Object.entries(galleryData).map(([year, months]) => (
          <div key={year} className="mb-12">
            <h1 className="text-4xl font-bold text-center mb-6">{year}</h1>
            {Object.entries(months).map(([month, images]) => (
              <div key={month} className="mb-8">
                <h2 className="text-2xl font-semibold text-center mb-4">{month}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {images.map((image, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <Image
                        src={image.link}
                        alt={image.caption}
                        width={300}
                        height={200}
                        className="object-cover"
                        onClick={() => openModal(image.link)}
                      />
                      <p className="text-center mt-2">{image.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative max-w-4xl mx-auto">
            <button
                className="absolute top-4 right-4 bg-white text-black text-4xl font-bold w-16 h-16 flex items-center justify-center rounded-full shadow-lg"
                onClick={closeModal}
              >
                &times;
              </button>
              <Image
                src={selectedImage}
                alt="Selected"
                width={1200}
                height={800}
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GalleryPage;
