import React from 'react';
import './css/Ingredient.css';

function Ingredient() {
    return (
        <div className='ingredient-selection'>
            <section className='rectangle'></section>
            <section className='button-section'>
                <h4 className="selection-title">Vegetables and Greens</h4>
                <div className='selection-buttons'>
                    <button>carrot</button>
                    <button>potato</button>
                    <button>tomato</button>
                    <button>avacado</button>
                    <button>spanich</button>
                </div>
                <h4 className="selection-title">Meats</h4>
                <div className='selection-buttons'>
                    <button>beef</button>
                    <button>pork</button>
                    <button>chicken</button>
                    <button>salmon</button>
                    <button>turkey</button>
                </div>
                <h4 className="selection-title">Others</h4>
                <div className='selection-buttons'>
                    <button>onion</button>
                    <button>egg</button>
                    <button>rice</button>
                    <button>garlic</button>
                    <button>cheese</button>
                </div>
            </section>
        </div>
    );
}

export default Ingredient;