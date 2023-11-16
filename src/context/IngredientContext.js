import React, { createContext, useContext, useState } from 'react';

const IngredientContext = createContext();

export const IngredientProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleButtonClick = (ingredient) => {
    if (!selectedItems.includes(ingredient)) {
      setSelectedItems([...selectedItems, ingredient]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== ingredient));
    }
  };

  return (
    <IngredientContext.Provider value={{ selectedItems, handleButtonClick }}>
      {children}
    </IngredientContext.Provider>
  );
};

export const useIngredientContext = () => useContext(IngredientContext);