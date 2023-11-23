import React, { createContext, useContext, useState} from 'react';

const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
    const [email, setEmail] = useState("");

    const handleLoginEmail = (data) => {
        setEmail(data);
        console.log(data);
      };

    return (
      <EmailContext.Provider value={{ email, handleLoginEmail}}>
        {children}
      </EmailContext.Provider>
    );
  };
  
  export const useEmailContext = () => useContext(EmailContext);