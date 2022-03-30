import React from 'react';
import backgroundImg from '../../../src/bg.jpg';
import './Home.css';

const Home = () => {
  return (
    <header className=" h-screen  w-full flex md:px-20 px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Fresh and Delicious
          <br className="hidden lg:inline-block" />
          ready made food.
        </h1>
        <p className="mb-5 leading-relaxed text-white">
          traditional italian food to delight the whole family
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-green-500 border-0 py-2 px-7 focus:outline-none hover:bg-green-600 rounded text-lg">
            Meals
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src={backgroundImg}
        />
      </div>
    </header>
  );
};

export default Home;
