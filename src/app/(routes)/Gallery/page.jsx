"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useAnimationHook from "@/hooks/AnimationHooks/moveUp";
import AlbumCard from "./_components/AlbumCard";

const GalleryPage = () => {
  const { ref, controls } = useAnimationHook();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/gallery?page=1&pageSize=12`
        );
        const result = await response.json();

        if (result.data) {
          const formattedAlbums = result.data.map((album) => ({
            id: album.id,
            name: album.attributes.name,
            description: album.attributes.description,
            coverImage: album.attributes.cover_image?.data?.attributes?.url,
          }));
          setAlbums(formattedAlbums);
        }
      } catch (error) {
        console.error("Error fetching albums:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAlbums();
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-6 md:p-8 mx-auto my-10 max-w-[1256px]">
      <h1 className="text-4xl md:text-5xl font-sans font-light text-right text-sky-950 mb-8">
        GALLERY
      </h1>

      <div className="mb-20">
        <div className="mb-10 px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-sky-950 mb-5">
            Our Campus
          </h1>
          <div className="w-full h-[2px] bg-slate-200">
            <div className="w-[15%] h-full bg-cyan-600"></div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <p className="text-xl text-sky-900">Loading Albums...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {albums.map((album) => (
              <motion.div
                key={album.id}
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                transition={{ duration: 0.5 }}
              >
                <AlbumCard
                  name={album.name}
                  description={album.description}
                  imageUrl={album.coverImage}
                  id={album.id}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;