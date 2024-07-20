"use client"

import { createContext, useContext, useState } from 'react';

const NewsContext = createContext();

export const useNews = () => {
  return useContext(NewsContext);
};

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState(null);

  const value = {
    news,
    setNews,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};
