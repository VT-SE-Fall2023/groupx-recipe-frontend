import React, { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState("");

    const handleLoginToken = (token) => {
        setToken(token);
        console.log(token);
      };

    return (
      <TokenContext.Provider value={{ token, handleLoginToken}}>
        {children}
      </TokenContext.Provider>
    );
  };
  
  export const useTokenContext = () => useContext(TokenContext);