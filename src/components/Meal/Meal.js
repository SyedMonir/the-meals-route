import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Meal.css';

const Meal = ({ meal }) => {
  const { idMeal, strMeal, strInstructions, strMealThumb } = meal;
  const navigate = useNavigate();
  const handleDetailsBtn = () => {
    navigate('/meal/' + idMeal);
  };

  return (
    <div className="meal">
      <img
        onClick={() => handleDetailsBtn(meal)}
        src={strMealThumb}
        alt={strMeal}
        className="cursor-pointer"
      />
      <h3 className="my-2 text-2xl">{strMeal}</h3>
      <p className="cursor-crosshair">{strInstructions.slice(0, 100)}</p>
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
