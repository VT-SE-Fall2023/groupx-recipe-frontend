import React from 'react';
import { useState } from 'react';
import './css/Ingredient.css';

function Ingredient() {
    //useState for storing selected items
    const [selectedItems, setSelectedItems] = useState([]);
    const veggies = ["carrot", "potato", "tomato", "avacado", "spanich"];
    const meats = ["beef", "pork", "chicken", "salmon", "turkey"];
    const others = ["onion", "egg", "rice", "garlic", "cheese"];

    return (
        <div className='ingredient-selection'>
            <section className='rectangle'></section>
            <section className='button-section'>
                <h4 className="selection-title">Vegetables and Greens</h4>
                <div className='selection-buttons'>
                    {veggies.map((item)=>(
                        <button className='menu-button'>{item}</button>
                    ))}
                </div>
                <h4 className="selection-title">Meats</h4>
                <div className='selection-buttons'>
                    {meats.map((item)=>(
                        <button className='menu-button'>{item}</button>
                    ))}
                </div>
                <h4 className="selection-title">Others</h4>
                <div className='selection-buttons'>
                    {others.map((item)=>(
                        <button className='menu-button'>{item}</button>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Ingredient;