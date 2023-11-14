import React, { createContext, useContext, useState } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
    const [token, setToken] = useState("");

    const handleLogin = (token) => {
        setToken(token);
        console.log(token);
      };

    return (
      <TokenContext.Provider value={{ token, handleLogin}}>
        {children}
      </TokenContext.Provider>
    );
  };
  
  export const useTokenContext = () => useContext(TokenContext);