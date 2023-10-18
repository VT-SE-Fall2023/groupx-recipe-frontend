import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RecipeDisplay from './RecipeDisplay';

function App() {
  const [recipe, setRecipe] = useState(null);
  const dummyRecipeData = {
    recipeName: 'Pasta',
    steps: [
      'Place a large pot of lightly salted water (no more than 1 tablespoon salt) over high heat, and bring to a boil. Fill a large bowl with hot water for serving, and set aside.',
      'In a mixing bowl, whisk together the eggs, yolks and pecorino and Parmesan. Season with a pinch of salt and generous black pepper.',
    ],
  };

  const handleGenerateRecipe = () => {
    // Replace this with your actual API endpoint
    // fetch('YOUR_API_ENDPOINT_HERE')
    //   .then((response) => response.json())
    //   .then((data) => setRecipe(data))
    //   .catch((error) => console.error('Error fetching data: ', error));
    console.log("generate recipe button was clicked");
    // Simulate an API call by setting the recipe data after a short delay
    setTimeout(() => {
      setRecipe(dummyRecipeData);
    }, 500);
  };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button className="generate-button" onClick={handleGenerateRecipe}>
          Generate
        </button>
      </header>

      <RecipeDisplay recipe={recipe} />
    </div>
  );
}

export default App;

