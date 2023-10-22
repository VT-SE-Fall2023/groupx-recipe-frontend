import React from 'react';
import './css/Ingredient.css';

function Ingredient() {
    return (
        <div className='ingredient-selection'>
            <section className='rectangle'></section>
            <section className='buttons'>
                <h4>Vegetables and Greens</h4>
                <h4>Meats</h4>
                <h4>Others</h4>
            </section>
        </div>
    );
}

export default Ingredient;