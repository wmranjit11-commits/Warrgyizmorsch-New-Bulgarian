"use client";
import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("Всички");

  return (
    <BlogContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
