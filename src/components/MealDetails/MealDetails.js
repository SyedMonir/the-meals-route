import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MealDetails.css';

const MealDetails = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [mealId]);
  // console.log(meal);
  return (
    <section
      style={{ backgroundColor: '#1a202c', color: 'white', height: '90vh' }}
    >
      <div className="mx-auto pt-5 py-10 p-4 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">
            {meal.strMeal}
          </h5>
          <small>
            {meal.strCategory} , {meal.strTags}
          </small>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {meal.strInstructions}
          </p>

          <p>
            {' '}
            <strong>Ingredient:</strong> {meal.strIngredient1},{' '}
            {meal.strIngredient2}, {meal.strIngredient3} , {meal.strIngredient4}
            , {meal.strIngredient5}, {meal.strIngredient6},{' '}
            {meal.strIngredient7}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MealDetails;
