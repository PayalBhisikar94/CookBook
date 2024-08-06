import React from 'react';

const RecipeDetails = ({ recipe, recipes, onSelectRecipe }) => {
  if (!recipe) return (
  <div className='menu-box'>
    <div className='container'>
      <div className='row'>
      {recipes.map(recipe => (
        <div className='col-lg-3 col-sm-3 col-xs-6' style={{cursor: 'pointer'}} key={recipe.id} onClick={() => onSelectRecipe(recipe)}>
          <img src={recipe.image} alt={recipe.title} width={'200px'} height={'200px'}  />
          <h5>{recipe.title}</h5>
        </div>
         ))}
      </div>
    </div>
  </div>
);

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} style={{ width: '400px', height: 'auto', paddingBottom: '60px' }} />
      <p><strong>Author:</strong> {recipe.author}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Directions:</h3>
      <ul>
        {recipe.directions.map((directions, index) => (
          <li key={index}>{directions}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeDetails;
