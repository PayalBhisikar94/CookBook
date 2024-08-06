import React from 'react';

const RecipeList = ({ recipes, onSelectRecipe }) => {
  return (
    <div className="recipe-list">
      <h2>Menu</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id} onClick={() => onSelectRecipe(recipe)}>
            {recipe.title}
          </li>
        ))}
        <li onClick={() => onSelectRecipe(null)}>
          Back to home
        </li>
      </ul>
    </div>
  );
};

export default RecipeList;
