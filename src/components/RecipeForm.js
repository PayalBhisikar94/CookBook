import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      title,
      ingredients: ingredients.split(','),
      instructions,
    });
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
      />
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma separated)"
      />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default RecipeForm;
