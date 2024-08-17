"use client"
import React, {useState, useEffect} from "react";
import { useRouter } from 'next/navigation';
import NewsCard from '@/components/HomeComponents/NewsComponents/NewsCard';
import { useNews } from '@/contexts/NewsContext';
import ViewMore from "../ViewMoreComponent/ViewMoreComponent";
import Link from "next/link";

function NewsSection() {

  const [newsData, setNewsData]= useState([]);
  const[loading, setLoading]= useState(false);
  const router = useRouter();
  const { setNews } = useNews();

  const handleCardClick = (newsItem) => {
    setNews(newsItem);
    router.push('/News/Details');
  };

  useEffect(()=>{
    const  getData= async()=>{
      setLoading(true);
      const response= await fetch(`https://cozy-captain-963d285ad5.strapiapp.com/api/notices`);
      const res= await response.json();
      setNewsData(res.data);
      setLoading(false);
    };
    getData();
  },[]);

  
  return (

    <div className="flex flex-col py-5 text-black min-h-dvh text-right items-end ">
      <h1 className="text-6xl font-sans text-sky-950 font-light relative my-10 right-3">UPDATES</h1>
      <div className="py-6 text-left flex flex-col items-center">
        {loading? (
          <p>Loading...</p>
        ):(
        newsData.slice(-5).map((newsItem, index) => (
          <div key={index} onClick={() => handleCardClick(newsItem)}>
            <NewsCard
              key={index}
              date={newsItem.attributes.publishedAt}
              title={newsItem.attributes.Title}
              description={newsItem.attributes.Description}
              viewMoreLink={newsItem.attributes.Pdf?.data?.attributes?.url || "#"}
              galleryLink={newsItem.attributes.Pdf?.data?.attributes?.url || "#"}
            />
          </div>
        )))
      }
      </div>
      <div className="relative right-3 mb-32">
        <Link href={'/Updates'}>
          <ViewMore width={200} colour="black" hovering={"no"}/>
        </Link>
      </div>
    </div>
  );
}

export default NewsSection;
