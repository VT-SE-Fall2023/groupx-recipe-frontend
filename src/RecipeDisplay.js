import React, { useRef, useState } from 'react';
import './App.css';
import Ingredient from './Ingredient';
import './css/RecipeDisplay.css'; // Import the CSS file
import displayBg from './img/recipe-display-bg.jpg';
import { useIngredientContext } from './context/IngredientContext';
import { useEmailContext } from './context/EmailContext';

import axios from 'axios';


function RecipeDisplay() {
    const { selectedItems} = useIngredientContext();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const {email} = useEmailContext();

    // const dummyRecipeData = {
    //     recipeName: 'Spaghetti Carbonara',
    //     steps: [
    //         'Place a large pot of lightly salted water (no more than 1 tablespoon salt) over high heat, and bring to a boil. Fill a large bowl with hot water for serving, and set aside.',
    //         'In a mixing bowl, whisk together the eggs, yolks and pecorino and Parmesan. Season with a pinch of salt and generous black pepper.',
    //         'Set the water to boil. Meanwhile, heat oil in a large skillet over medium heat, add the pork, and sauté until the fat just renders, on the edge of crispness but not hard. Remove from heat and set aside.',
    //         'Add pasta to the water and boil until a bit firmer than al dente. Just before pasta is ready, reheat guanciale in skillet, if needed. Reserve 1 cup of pasta water, then drain pasta and add to the skillet over low heat. Stir for a minute or so.',
    //         'Empty serving bowl of hot water. Dry it and add hot pasta mixture. Stir in cheese mixture, adding some reserved pasta water if needed for creaminess. Serve immediately, dressing it with a bit of additional grated pecorino and pepper.'
    //     ],
    // };

    let recipeDisplayRef = useRef(null);

    function scrollTo(ref) {
        if (!ref.current) return;
        ref.current.scrollIntoView({ behavior: "smooth" });
    }

    const handleGenerateRecipe = () => {
        // Replace this with your actual API endpoint
        // fetch('YOUR_API_ENDPOINT_HERE')
        //   .then((response) => response.json())
        //   .then((data) => setRecipe(data))
        //   .catch((error) => console.error('Error fetching data: ', error));
        console.log("generate recipe button was clicked");
        setLoading(true);
        console.log(selectedItems, email)
        // Simulate an API call by setting the recipe data after a short delay
        setTimeout(() => {
            const REACT_APP_API_URL= "https://rg.discovery.cs.vt.edu/api/v1";
            const apiUrl = `${REACT_APP_API_URL}/recipe`;
            if (email) {
                axios.post(apiUrl,{ingredients: selectedItems, email: email})
                .then((response) => {
                    // Handle the success response, e.g., redirect to a login page
                    console.log('Recipe generated', response.data);
                    setLoading(false);
                    setRecipe(response.data);
                })
                .catch((error) => {
                    // Handle the error, e.g., display an error message
                    console.error('Recipe generation failed:', error);
                });
            } else {
                axios.post(apiUrl,{ingredients: selectedItems})
                .then((response) => {
                    // Handle the success response, e.g., redirect to a login page
                    console.log('Recipe generated', response.data);
                    setLoading(false);
                    setRecipe(response.data);
                })
                .catch((error) => {
                    // Handle the error, e.g., display an error message
                    console.error('Recipe generation failed:', error);
                });
                //setRecipe(dummyRecipeData);
            }
        }, 500);

        // Scroll the recipe display into view
        scrollTo(recipeDisplayRef);
    };

    const divStyle = {
        backgroundImage: `url(${displayBg})`,
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat', // Adjust as needed
        backgroundPosition: 'center bottom', // Adjust as needed
        height: '1000px',
        display: 'flex',
        padding: '5% 20%',
    };


    return (

        <div className="container" >
            <div className="main" >
                <h1 className="main-title">Get Your Recipes</h1>
                <p className="main-sub">select ingredients and see magic happens</p>
                <Ingredient />
                <button className="generate-button" onClick={handleGenerateRecipe}>
                    Generate
                </button>
            </div>

            <div style={divStyle} ref={recipeDisplayRef}>
                {loading ? (
                    <h3 className="loading-message">Generating recipe...</h3>
                ) : recipe ? (
                    <div
                        className={`recipe-display ${recipe ? 'active' : ''}`}
                    >
                        <h2 className='recipe-name'>{recipe.name}</h2>
                        {recipe.instructions.map((step, index) => (
                            <div key={`step+${index + 1}`}>
                                <h3>Step {index + 1}</h3>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="no-recipe-message">Click "Generate" to get a recipe.</p>
                )}
            </div>
        </div>

    );
}

export default RecipeDisplay;
