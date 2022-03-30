import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetails = () => {
  const { mealId } = useParams();
  const [meal, setMeal] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => setMeal(data.meals[0]));
  }, [mealId]);
  console.log(meal);
  return (
    <div>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="cursor-pointer"
      />
      <h3 className="my-2 text-2xl">{meal.strMeal}</h3>
      <p className="cursor-crosshair">{meal.strInstructions.slice(0, 100)}</p>
      <p>{meal.strYoutube}</p>
    </div>
  );
};

export default MealDetails;
