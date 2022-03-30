import React from 'react';
import './Meal.css';

const Meal = (props) => {
  const { strMeal, strInstructions, strMealThumb } = props.meal;

  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <h3>{strMeal}</h3>
      <p>{strInstructions.slice(0, 100)}</p>
      <button className="bg-teal-600">Add this Food</button>
    </div>
  );
};

export default Meal;
