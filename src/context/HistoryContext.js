import React, { createContext, useContext, useState} from 'react';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
    const [history, setHistory] = useState([]);
  
    const setUserHistory = (data) => {
      setHistory(data)
    };
  
    return (
      <HistoryContext.Provider value={{ history, setUserHistory }}>
        {children}
      </HistoryContext.Provider>
    );
  };
  
  export const useHistoryContext = () => useContext(HistoryContext);