import React from 'react';
import { useState } from 'react';
import './css/Ingredient.css';

function Ingredient() {
    //useState for storing selected items
    const [selectedItems, setSelectedItems] = useState([]);
    const veggies = ["carrot", "potato", "tomato", "avacado", "spanich"];
    const meats = ["beef", "pork", "chicken", "salmon", "turkey"];
    const others = ["onion", "egg", "rice", "garlic", "cheese"];

    //function to check whether the ingredient is selected
    const findItem = (selectedItems, ingredient) => selectedItems.find((item)=>item === ingredient)

    const handleButtonClick = (ingredient) => {
        // Check if the item is already selected
        if (!selectedItems.includes(ingredient)) {
          setSelectedItems([...selectedItems, ingredient]);
        } else { //remove the item from the list if it's already selected.
            setSelectedItems(selectedItems.filter((item)=>item!==ingredient));
        }
        console.log(selectedItems)
      };

    return (
        <div className='ingredient-selection'>
            <section className='rectangle'></section>
            <section className='button-section'>
                <h4 className="selection-title">Vegetables and Greens</h4>
                <div className='selection-buttons'>
                    {veggies.map((item)=>(
                        <button 
                            className={findItem(selectedItems, item) ? 'selected-button' : 'menu-button'}
                            onClick={()=>handleButtonClick(item)}>
                            {item}
                        </button>
                    ))}
                </div>
                <h4 className="selection-title">Meats</h4>
                <div className='selection-buttons'>
                    {meats.map((item)=>(
                        <button 
                            className='menu-button'
                            onClick={()=>handleButtonClick(item)}>
                            {item}
                        </button>
                    ))}
                </div>
                <h4 className="selection-title">Others</h4>
                <div className='selection-buttons'>
                    {others.map((item)=>(
                        <button 
                        className='menu-button'
                        onClick={()=>handleButtonClick(item)}>
                            {item}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Ingredient;