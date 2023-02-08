import React from "react";

export default function About() {
	return (
		<div
			name='about'
			className='w-full px-4 h-screen bg-[#0a192f]  text-gray-300'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
					<div className='sm:text-right pl-4 pb-8'>
						<p className='text-4xl font-bold inline border-b-4 border-pink-600'>
							About
						</p>
					</div>

					<div></div>
				</div>

				<div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
					<div className='sm:text-right text-4xl font-bold'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Facere, praesentium.
						</p>
					</div>

					<div>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Distinctio a necessitatibus laborum quo minus nihil sint
							libero similique laboriosam! Ullam.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
