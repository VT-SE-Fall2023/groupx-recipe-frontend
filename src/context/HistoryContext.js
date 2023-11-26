import React, { createContext, useContext, useState} from 'react';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
    const getStoredHistory = () => {
      try {
          return JSON.parse(localStorage.getItem('history')) || [];
      } catch (error) {
          console.error('Error retrieving last category from local storage', error);
      }
    };
    
    const [history, setHistory] = useState(() => getStoredHistory());
  
    const setUserHistory = (data) => {
      setHistory(data)
      localStorage.setItem('history', JSON.stringify(data));
    };
  
    return (
      <HistoryContext.Provider value={{ history, setUserHistory }}>
        {children}
      </HistoryContext.Provider>
    );
  };
  
  export const useHistoryContext = () => useContext(HistoryContext);