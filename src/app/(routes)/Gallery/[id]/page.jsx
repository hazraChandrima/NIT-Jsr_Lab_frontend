"use client";
import React from 'react';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import useAnimationHook from '@/hooks/AnimationHooks/moveUp';

const GalleryPage = ({ params }) => {

    const { id } = params;
    const [images, setImages] = useState(null);
    const [heading, setHeading] = useState(null);
    const [desc, setDesc] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const { ref, controls } = useAnimationHook();

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    `https://cozy-captain-963d285ad5.strapiapp.com/api/galleries/${id}?populate[1]=images.media`
                );
                const result = await response.json();

                if (result.data) {
                    const albumHeading = result.data.attributes.name;
                    const albumDesc = result.data.attributes.description;
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

        <div className='px-10'>

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

            <h2 className='text-right mr-8 text-2xl sm:text-3xl font-sans text-sky-800 font-semibold my-5'>{heading}</h2>
            <p className='text-right mr-8 text-gray-700 mb-5'>{desc}</p>
            <div className="w-full h-[1px] mb-10 bg-slate-300"></div>
            <div className=" mr-8 mb-7 w-full flex flex-row justify-evenly flex-wrap">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className="relative mb-8 group mx-5"
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={controls}
                        onClick={() => openModal(image.url)}
                    >
                        <Image
                            src={image.url}
                            alt={image.title}
                            width={400}
                            height={200}
                            className="object-cover transition w-96 h-72 transition-duration-400 mb-4 group-hover:brightness-[40%] group-hover:shadow-2xl group-hover:cursor-pointer"
                            onClick={() => openModal(image.url)}
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-xl font-sans font-semibold mb-2 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">{image.title}</h2>
                            <p className="text-gray-200 text-center mb-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">{image.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

    )
}

export default GalleryPage
