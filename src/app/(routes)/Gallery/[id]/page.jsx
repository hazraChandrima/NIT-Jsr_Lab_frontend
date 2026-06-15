"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import useAnimationHook from '@/hooks/AnimationHooks/moveUp';

const GalleryPage = ({ params }) => {
    const { id } = params;
    const [images, setImages] = useState([]);
    const [heading, setHeading] = useState('');
    const [desc, setDesc] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const { ref, controls } = useAnimationHook();

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch(
                    `/api/gallery/${id}`
                );
                const result = await response.json();

                if (result.data) {
                    setHeading(result.data.attributes.name);
                    setDesc(result.data.attributes.description);
                    setImages(result.data.attributes.images.map(img => ({
                        title: img.title,
                        description: img.description,
                        url: img.media.data.attributes.url,
                    })));
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
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="text-2xl font-semibold text-sky-800">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="text-2xl font-semibold text-red-500">{error}</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl sm:text-5xl font-bold text-sky-800"
                    >
                        {heading}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-4 text-lg text-gray-600"
                    >
                        {desc}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="relative group rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => setSelectedImage(image.url)}
                        >
                            <div className="absolute inset-0 border border-white/20 rounded-2xl shadow-lg"></div>
                            <Image
                                src={image.url}
                                alt={image.title}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover rounded-2xl"
                                priority={index < 3}
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 rounded-2xl">
                                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                                <p className="text-gray-200 mt-2">{image.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/75 backdrop-blur-md flex items-center justify-center z-50"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-4xl w-full mx-4">
                        <button
                            className="absolute -top-10 right-0 bg-white/20 backdrop-blur-md text-white text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full shadow-lg hover:bg-white/30 transition-colors"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            aria-label="Close modal"
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Selected"
                            width={1200}
                            height={800}
                            className="rounded-2xl object-cover"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;