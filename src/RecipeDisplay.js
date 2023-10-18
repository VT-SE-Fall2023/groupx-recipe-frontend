import React from 'react';
import './css/RecipeDisplay.css'; // Import the CSS file

function RecipeDisplay({ recipe }) {
    if (!recipe) {
        return null; // If recipe is not available, don't render anything
    }


    const { recipeName, steps } = recipe;

    return (
        <div
            className={`recipe-display ${recipe ? 'active' : ''}`}
        >
            <h2>{recipeName}</h2>
            <ul>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeDisplay;
