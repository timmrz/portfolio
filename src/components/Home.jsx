import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export default function Home() {
	return (
		<div
			name='home'
			className='bg-[#0a192f] w-full h-screen '>
			{/* container */}
			<div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p className='text-pink-600'>Hi, my name is</p>

				<h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
					Tsimafei Maroz
				</h1>
				<h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
					I'm a Front End Developer
				</h2>
				<p className='text-[#8892b0] py-4 max-w-[700px]'>
					I am a front-end developer specializing in web application
					development with React. At the moment I am focused on gaining new
					work experience, improving my skills and learning new
					technologies.
				</p>

				<div>
					<button className='text-white group border-2 my-2  hover:bg-pink-600 hover:border-pink-600 duration-300'>
						<Link
							className='w-full h-full px-6 py-3 flex items-center'
							to='work'
							smooth={true}
							duration={400}>
							View works
							<span className='group-hover:rotate-90 duration-300 group-hover:-translate-x-[-8px] group-hover:translate-y-[-5px]'>
								<HiArrowNarrowRight className='ml-3' />
							</span>
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
}
