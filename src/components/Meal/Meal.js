import React from 'react';
import { Link } from 'react-router-dom';
import './Meal.css';

const Meal = ({ meal }) => {
  const { strMeal, strInstructions, strMealThumb } = meal;
  const handleDetailsBtn = (mealDetails) => {
    <Link to={`/${mealDetails.mealId}`}></Link>;
  };

  return (
    <div className="meal">
      <img src={strMealThumb} alt="" />
      <h3 className="my-2 text-2xl">{strMeal}</h3>
      <p>{strInstructions.slice(0, 100)}</p>
      <div className="flex justify-evenly">
        <button className="bg-teal-600 my-2 py-1 px-3 rounded">
          Add this Food
        </button>
        <button
          onClick={() => handleDetailsBtn(meal)}
          className="bg-teal-600 my-2 py-1 px-3 rounded"
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Meal;
