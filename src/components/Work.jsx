import React from "react";
import WorkImg from "../img/workImg.jpeg";
import realEstate from "../img/realestate.jpg";
import WorkItem from "./WorkItem";
import WorkWeather from "../img/work-weather.jpg";
import WorkTodo from "../img/work-todo.jpg";
import WorkColors from "../img/work-colors.jpg";
import WorkPars from "../img/work-pars.jpg";
import WorkStore from "../img/work-store.jpg";
import WorkSearch from "../img/work-search.jpg";

export default function Work() {
  return (
    <div name='work' className='w-full bg-[#0a192f] text-gray-300 md:h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Works
          </p>

          <p className='py-6'>// Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* grid item */}
          <WorkItem
            demo='https://timmrz.github.io/sneaker-store/'
            code='https://github.com/timmrz/sneaker-store'
            description='React JS Sneakers Store'
            imgUrl={WorkStore}
          />

          <WorkItem
            demo='https://timmrz.github.io/githubSearch/'
            code='https://github.com/timmrz/githubSearch'
            description='React TS Github Search'
            imgUrl={WorkSearch}
          />

          <WorkItem
            demo='https://timmrz.github.io/react-weather-app/'
            code='https://github.com/timmrz/react-weather-app'
            description='React JS Weather App'
            imgUrl={WorkWeather}
          />

          <WorkItem
            demo='https://timmrz.github.io/game-Pars/'
            code='https://github.com/timmrz/game-Pars'
            description='JS Game Pars'
            imgUrl={WorkPars}
          />

          <WorkItem
            demo='https://timmrz.github.io/react-todo-app/'
            code='https://github.com/timmrz/react-todo-app'
            description='React JS ToDo'
            imgUrl={WorkTodo}
          />

          <WorkItem
            demo='https://timmrz.github.io/colours/'
            code='https://github.com/timmrz/colours'
            description='JS Generator of colors'
            imgUrl={WorkColors}
          />
        </div>
      </div>
    </div>
  );
}
