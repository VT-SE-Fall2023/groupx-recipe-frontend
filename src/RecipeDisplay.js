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
            <h2 className='recipe-name'>{recipeName}</h2>
            {/* map over the steps array and render a list item for each step with the step header and step description */}
            {steps.map((step, index) => (
                <div key={`step+${index + 1}`}>
                    <h3>Step {index + 1}</h3>
                    <p>{step}</p>
                </div>
            ))}

        </div>
    );
}

export default RecipeDisplay;
