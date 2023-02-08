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
import Gpt from "../img/gpt-3.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Work() {
	return (
		<div name='work' className='w-full bg-[#0a192f] text-gray-300 md:h-screen'>
			<div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full'>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600'>Works</p>

					<p className='py-8'>// Check out some of my recent works</p>
				</div>
				{/* <Tabs selectedTabClassName='border-pink-600 focus:outline-none hover:bg-pink-600 hover:bg-transparent'>
					<TabList className='flex items-center justify-center'>
						<Tab className='text-white border-2 text-2xl hover:bg-pink-600 hover:border-pink-600 duration-300 px-5 py-3 my-4 mx-2 flex items-center outline-none'>1</Tab>
						<Tab className='text-white border-2 text-2xl hover:bg-pink-600 hover:border-pink-600 duration-300 px-5 py-3 my-4 mx-2 flex items-center outline-none'>2</Tab>
					</TabList>

					<TabPanel> */}
				{/* container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{/* grid item */}
					<WorkItem demo='https://timmrz.github.io/sneaker-store/' code='https://github.com/timmrz/sneaker-store' description='React JS Sneakers Store' imgUrl={WorkStore} />

					<WorkItem demo='https://timmrz.github.io/gpt-3/' code='https://github.com/timmrz/gpt-3' description='React JS Landing Page' imgUrl={Gpt} />

					<WorkItem demo='https://timmrz.github.io/githubSearch/' code='https://github.com/timmrz/githubSearch' description='React TS Github Search' imgUrl={WorkSearch} />

					<WorkItem demo='https://timmrz.github.io/react-weather-app/' code='https://github.com/timmrz/react-weather-app' description='React JS Weather App' imgUrl={WorkWeather} />

					<WorkItem demo='https://timmrz.github.io/game-Pars/' code='https://github.com/timmrz/game-Pars' description='JS Game Pars' imgUrl={WorkPars} />

					<WorkItem demo='https://timmrz.github.io/react-todo-app/' code='https://github.com/timmrz/react-todo-app' description='React JS ToDo' imgUrl={WorkTodo} />
				</div>
				{/* </TabPanel>
					<TabPanel>
						<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
							<WorkItem demo='https://timmrz.github.io/colours/' code='https://github.com/timmrz/colours' description='JS Generator of colors' imgUrl={WorkColors} />
						</div>
					</TabPanel>
				</Tabs> */}
			</div>
		</div>
	);
}
