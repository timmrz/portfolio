import React from "react";

export default function WorkItem(props) {
	return (
		<div style={{ backgroundImage: `url(${props.imgUrl})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
			{/* hover effects */}
			<div className='opacity-0 group-hover:opacity-100 text-center z-10 px-4'>
				<span className='text-2xl font-bold text-white tracking-wider'>{props.description}</span>
				<div className='pt-8 text-center '>
					<a href={props.demo} target='_blank'>
						<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
					</a>

					<a href={props.code} target='_blank'>
						<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
					</a>
				</div>
			</div>
		</div>
	);
}
