import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import OrderList from '../OrderList/OrderList';
import './Restaurant.css';

const Restaurant = () => {
  const [inputText, setInputText] = useState('');
  const [meals, setMeals] = useState([]);
  const [orders, setOrders] = useState([]);

  const handleSearchInput = (e) => {
    setInputText(e.target.value);
  };

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [inputText]);
  /* 
        6. Also, the useEffect below will not work. Because, search result might not include the meals previously added to the cart
        7. in that case, for each mealId, you have to load the meal from the api (you will find a new pai to load meal by Id) and then add them to the order state.
        ---------------  
    */

  return (
    <section
      style={{ backgroundColor: '#1a202c', color: 'white' }}
      className="mx-auto"
    >
      <form className="flex text-center flex-col md:flex-row md:w-full md:space-x-3 space-y-3 md:space-y-0 justify-center pt-3 mb-3">
        <div className=" relative ">
          <input
            type="text"
            onChange={handleSearchInput}
            id="form-subscribe-Search"
            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 py-2 px-10 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
            placeholder="Search your meals"
          />
        </div>
        {/* <button
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-[#0ffbfb] rounded-lg shadow-md hover:bg-[teal] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          type="submit"
        >
          Search
        </button> */}
      </form>

      <section className="restaurant-menu">
        <div className="meals-container">
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </div>
        <div className="order-list ">
          <OrderList orders={orders}></OrderList>
        </div>
      </section>
    </section>
  );
};

export default Restaurant;
