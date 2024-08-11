"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
// import placeholder from '@/assets/images/placeholder.png';
import { Description } from '@mui/icons-material';
import AlbumCard from './_components/AlbumCard';
import { motion } from "framer-motion";
import useAnimationHook from '@/hooks/AnimationHooks/moveUp';

const GalleryPage = () => {

  const { ref, controls } = useAnimationHook();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(null);
  // const imageUrl = "https://i.pinimg.com/736x/09/21/fc/0921fc87aa989330b8d403014bf4f340.jpg";
  // const [coverImage, setCoverImage] = useState(null);



  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      // const response = await fetch(
      //   `https://cozy-captain-963d285ad5.strapiapp.com/api/galleries?populate=cover_image`
      // )
      // const result = await response.json();

      //   const coverPhoto = result.data.attributes?.cover_image?.data?.attributes?.url;

      // setCoverImage(coverPhoto);
      // setAlbums(result.data);
      // setLoading(false);

      try {
        const response = await fetch(
          `https://cozy-captain-963d285ad5.strapiapp.com/api/galleries?populate=cover_image`
        );
        const result = await response.json();

        if (result.data) {
          const formattedAlbums = result.data.map(album => ({
            id: album.id,
            name: album.attributes.name,
            description: album.attributes.description,
            coverImage: album.attributes.cover_image?.data?.attributes?.url
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




  // useEffect(() => {
  //   const fetchAlbums = async () => {
  //     setLoading(true);
  //     const response = await fetch(
  //       `https://cozy-captain-963d285ad5.strapiapp.com/api/galleries?populate=cover_image`
  //     )
  //     const result = await response.json();

  //     if (result.data) {
  //       const coverImage = result.data.attributes.cover_image?.data?.attributes?.url;
  //       const formattedImages = imageData.map((img) => ({
  //           title: img.title,
  //           description: img.description,
  //           url: img.media.data.attributes.url,
  //       }));
  //     setAlbums(formattedImages);
  //     setCoverImage(coverImage);
  //     setLoading(false);
  //   };
  // };
  //   fetchAlbums();

  // }, []);


  return (
    <>
      <h1 className='text-5xl font-sans font-light relative text-right mr-10 mb-8 text-sky-950'>GALLERY</h1>
      <div className="p-4">
        {/* {Object.entries(galleryData).map(([year, months]) => (
          <div key={year} className="mb-12">
            <h1 className="text-4xl font-bold text-center text-sky-700 mb-6">{year}</h1>
            {Object.entries(months).map(([month, images]) => (
              <div key={month} className="mb-8">
                <h2 className="text-2xl font-semibold text-center text-sky-900 mb-4">{month}</h2>
                <div className="flex flex-row flex-wrap justify-center items-center">
                  {images.map((image, index) => (
                    <div key={index} className="relative group cursor-pointer">
                      <Image
                        src={image.link}
                        alt={image.caption}
                        width={300}
                        height={200}
                        className="object-cover mx-7"
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
 */}


        <div >
          {loading ? (
            <div>Loading Data...</div>
          ) : (
            <>
              <div className="mb-20">
                <div className="mb-10 px-7">
                  <h1 className="sm:text-3xl text-2xl mb-5 text-sky-950">
                    Our Campus
                  </h1>
                  <div className="w-full h-[2px] bg-slate-300">
                    <div className="w-[15%] h-full bg-slate-700"></div>
                  </div>
                </div>
                <div className=" flex flex-row flex-wrap justify-evenly items-center">
                  {/* {albums.map((album) => (
                    <motion.div
                      className="mb-8 w-80"
                      ref={ref}
                      initial={{ opacity: 0, y: 50 }}
                      animate={controls}
                    >
                      <AlbumCard
                        key={album.id}
                        name={album.attributes.name}
                        description={album.attributes.description}
                        imageUrl={coverImage}
                        id={album.id}
                      />
                    </motion.div>
                  ))} */}

                  {albums.map(album => (
                    <motion.div
                      key={album.id}
                      className="mb-8 w-80"
                      ref={ref}
                      initial={{ opacity: 0, y: 50 }}
                      animate={controls}
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
              </div>
            </>
          )}
        </div>

      </div>
    </>
  );
};

export default GalleryPage;
