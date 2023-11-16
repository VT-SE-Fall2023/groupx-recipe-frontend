import React from 'react';
import './css/Ingredient.css';
import { useIngredientContext } from './context/IngredientContext';


function Ingredient() {
    const { selectedItems, handleButtonClick } = useIngredientContext();
    const veggies = ["carrot", "potato", "tomato", "avacado", "spanich"];
    const meats = ["beef", "pork", "chicken", "salmon", "turkey"];
    const others = ["onion", "egg", "rice", "garlic", "cheese"];

    //function to check whether the ingredient is selected
    const findItem = (selectedItems, ingredient) => selectedItems.find((item)=>item === ingredient)

    return (
        <div className='ingredient-selection'>
            <section className='rectangle'></section>
            <section className='button-section'>
                <h4 className="selection-title">Vegetables and Greens</h4>
                <div className='selection-buttons'>
                    {veggies.map((item)=>(
                        <button 
                            onClick={()=>handleButtonClick(item)}
                            style={{ backgroundColor: findItem(selectedItems, item) ? 'orange' : '#D9D9D9' }}>
                            {item}
                        </button>
                    ))}
                </div>
                <h4 className="selection-title">Meats</h4>
                <div className='selection-buttons'>
                    {meats.map((item)=>(
                        <button 
                            className='menu-button'
                            onClick={()=>handleButtonClick(item)}
                            style={{ backgroundColor: findItem(selectedItems, item) ? 'orange' : '#D9D9D9' }}>
                            {item}
                        </button>
                    ))}
                </div>
                <h4 className="selection-title">Others</h4>
                <div className='selection-buttons'>
                    {others.map((item)=>(
                        <button 
                        className='menu-button'
                        onClick={()=>handleButtonClick(item)}
                        style={{ backgroundColor: findItem(selectedItems, item) ? 'orange' : '#D9D9D9' }}>
                            {item}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Ingredient;