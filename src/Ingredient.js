import React from 'react';
import './css/Ingredient.css';

function Ingredient() {
    return (
        <div className='ingredient-selection'>
            <section className='rectangle'></section>
            <section className='button-section'>
                <h4 className="selection-title">Vegetables and Greens</h4>
                <div className='selection-buttons'>
                    <button className='menu-button'>carrot</button>
                    <button className='menu-button'>potato</button>
                    <button className='menu-button'>tomato</button>
                    <button className='menu-button'>avacado</button>
                    <button className='menu-button'>spanich</button>
                </div>
                <h4 className="selection-title">Meats</h4>
                <div className='selection-buttons'>
                    <button className='menu-button'>beef</button>
                    <button className='default-button'>pork</button>
                    <button className='menu-button'>chicken</button>
                    <button className='menu-button'>salmon</button>
                    <button className='menu-button'>turkey</button>
                </div>
                <h4 className="selection-title">Others</h4>
                <div className='selection-buttons'>
                    <button className='menu-button'>onion</button>
                    <button className='default-button'>egg</button>
                    <button className='menu-button'>rice</button>
                    <button className='menu-button'>garlic</button>
                    <button className='default-button'>cheese</button>
                </div>
            </section>
        </div>
    );
}

export default Ingredient;