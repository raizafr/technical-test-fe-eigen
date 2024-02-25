'use client';

import { createContext, useContext, useState } from 'react';

const CountryContext = createContext({});

const CountryContextProvider = ({ children }: any) => {
  const [countryValue, setCountryValue] = useState<string>('id');
  return (
    <CountryContext.Provider value={{ countryValue, setCountryValue }}>
      {children}
    </CountryContext.Provider>
  );
};

const useCountry = () => useContext(CountryContext);

export { CountryContextProvider, useCountry };
