'use client';

import { createContext, useContext, useState } from 'react';

const SearchContext = createContext({});

const SearchContextProvider = ({ children }: any) => {
  const [searchValue, setSearchvalue] = useState<string>('');
  return (
    <SearchContext.Provider value={{ searchValue, setSearchvalue }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export { SearchContextProvider, useSearch };
