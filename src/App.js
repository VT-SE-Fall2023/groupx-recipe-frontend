import React, { useRef, useState } from 'react';
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
    // Simulate an API call by setting the recipe data after a short delay
    setTimeout(() => {
      setRecipe(dummyRecipeData);
    }, 500);

    // Scroll the recipe display into view
    scrollTo(recipeDisplayRef);
  };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="generate-button" onClick={handleGenerateRecipe}>
          Generate
        </button>
      </header>

      <div style={{ height: "800px" }} ref={recipeDisplayRef}>
        <RecipeDisplay recipe={recipe} />
      </div>

    </div>
  );
}

export default App;

