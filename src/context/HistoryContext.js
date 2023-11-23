import React, { createContext, useContext, useState } from 'react';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
    const [history, setHistory] = useState([]);
  
    const fetchUserHistory = (data) => {
      setHistory(data)
    };
  
    return (
      <HistoryContext.Provider value={{ history, fetchUserHistory }}>
        {children}
      </HistoryContext.Provider>
    );
  };
  
  export const useHistoryContext = () => useContext(HistoryContext);