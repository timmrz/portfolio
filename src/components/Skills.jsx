import React from "react";
import HTML from "../img/html.png";
import CSS from "../img/css.png";
import JavaScript from "../img/javascript.png";
import ReactImg from "../img/react.png";
import Tailwind from "../img/tailwind.png";
import Node from "../img/node.png";
import Mongo from "../img/mongo.png";
import Github from "../img/github.png";
import Typescript from "../img/typescript.png";
import Redux from "../img/redux.png";

export default function Skills() {
  return (
    <div
      name='skills'
      className='w-full bg-[#0a192f] text-gray-300 md:h-screen'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-8 flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
          <p className='py-4 '>
            // These are the technologies I've worked with
          </p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto mt-4' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto mt-4' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto mt-4'
              src={JavaScript}
              alt='JavaScript icon'
            />
            <p className='my-4'>JAVASCRIPT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto mt-4'
              src={ReactImg}
              alt='React icon'
            />
            <p className='my-4'>REACT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto mt-4' src={Github} alt='Github icon' />
            <p className='my-4'>GITHUB</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto mt-4'
              src={Typescript}
              alt='Node icon'
            />
            <p className='my-4'>TYPESCRIPT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto mt-4' src={Redux} alt='Mongo icon' />
            <p className='my-4'>REDUX TOOLKIT</p>
          </div>

          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              className='w-20 mx-auto mt-4'
              src={Tailwind}
              alt='Tailwing icon'
            />
            <p className='my-4'>TAILWIND</p>
          </div>
        </div>
      </div>
    </div>
  );
}
