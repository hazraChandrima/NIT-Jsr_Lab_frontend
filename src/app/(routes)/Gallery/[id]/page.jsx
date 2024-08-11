"use client";
import React from 'react';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import useAnimationHook from '@/hooks/AnimationHooks/moveUp';

const GalleryPage = ({ params }) => {

    const { id } = params;
    const [images, setImages] = useState(null);
    const [heading,setHeading]= useState(null);
    const [desc, setDesc] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const{ref, controls}= useAnimationHook();

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    `https://cozy-captain-963d285ad5.strapiapp.com/api/galleries/${id}?populate[1]=images.media`
                );
                const result = await response.json();

                if (result.data) {
                    const albumHeading = result.data.attributes.name;
                    const albumDesc= result.data.attributes.description;
                    const imageData = result.data.attributes.images;
                    const formattedImages = imageData.map((img) => ({
                        title: img.title,
                        description: img.description,
                        url: img.media.data.attributes.url,
                    }));
                    setImages(formattedImages);
                    setHeading(albumHeading);
                    setDesc(albumDesc);
                } else {
                    setError("Image not found");
                }
            } catch (err) {
                setError("Failed to fetch images");
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [id]);

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">{error}</p>;
    }


    const openModal = (url) => setSelectedImage(url);
    const closeModal = () => setSelectedImage(null);

    return (
        <div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative max-w-4xl mx-4">
                        <button
                            className="absolute top-4 right-4 bg-white text-black text-xl font-bold w-5 h-5 sm:w-8 sm:h-8 flex items-center justify-center rounded-full shadow-lg"
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

            <h2 className='text-center text-2xl font-semibold my-7'>{heading}</h2>
            <p className='text-center text-gray-700 mb-10'>{desc}</p>
            <div className=" mx-10 p-6 mb-7 flex flex-row justify-evenly flex-wrap">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="mb-8 w-80"
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                    >
                        <Image
                            src={image.url}
                            alt={image.title}
                            width={400}
                            height={200}
                            className="object-cover hover:shadow-2xl transition transition-duration-200 mb-4"
                            onClick={() => openModal(image.url)}
                        />
                        <h2 className="text-xl font-semibold mb-2">{image.title}</h2>
                        <p className="text-gray-700">{image.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default GalleryPage
