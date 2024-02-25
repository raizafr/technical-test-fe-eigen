'use client';

import { createContext, useContext, useState } from 'react';

const CategoryContext = createContext({});

const CategoryContextProvider = ({ children }: any) => {
  const [categoryValue, setCategoryValue] = useState<string>('general');
  return (
    <CategoryContext.Provider value={{ categoryValue, setCategoryValue }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryContextProvider, useCategory };
