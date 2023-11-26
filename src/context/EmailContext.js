import React, { createContext, useContext, useState} from 'react';

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const getStoredEmail = () => {
    try {
        return localStorage.getItem('email') || "";
    } catch (error) {
        console.error('Error retrieving last category from local storage', error);
    }
  };

    const [email, setEmail] = useState(() => getStoredEmail());

    const handleLoginEmail = (data) => {
        setEmail(data);
        localStorage.setItem('email', data);
        console.log(data);
      };

    return (
      <EmailContext.Provider value={{ email, handleLoginEmail}}>
        {children}
      </EmailContext.Provider>
    );
  };
  
  export const useEmailContext = () => useContext(EmailContext);