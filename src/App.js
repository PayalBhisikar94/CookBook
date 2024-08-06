import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import recipes from './data/recipes';
import Banner from './components/Banner';
import './App.css';

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <div className="recipeMain">
      {console.log("selectedRecipe", selectedRecipe)}
      <div className='banner'>
        <Banner />
      </div>
      <div className='bg-light'>
        <div className='container-fluid pt-100 pb-100'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-2 col-sm-4 col-xs-12'>
                <div className="sidebar">
                  <RecipeList recipes={recipes} onSelectRecipe={setSelectedRecipe} />
                </div>
              </div>
              <div className='col-lg-10 col-sm-8 col-xs-12'>
                <div className="main-content">
                  <RecipeDetails recipe={selectedRecipe} recipes={recipes} onSelectRecipe={setSelectedRecipe} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
