import React from "react";

export default function Contact() {
	return (
		<div name='contact' className='w-full bg-[#0a192f] h-screen flex justify-center items-center'>
			<form method='POST' action='https://getform.io/f/2cc49908-cebe-4c4e-99a4-a4f26af56cd7' className='flex flex-col max-w-[600px] w-full p-8 md:p-0'>
				<div className='pb-8 text-gray-300'>
					<p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
					<p className='py-4'>// Submit the form below or shoot me an email - tsimafei.maroz@gmail.com</p>
				</div>
				<input required className='bg-[#ccd6f6] p-2 rounded-md' type='text' placeholder='Name' name='name' />
				<input required className='my-4 p-2 bg-[#ccd6f6] rounded-md' type='email' placeholder='Email' name='email' />
				<textarea required className='bg-[#ccd6f6] p-2 rounded-md' name='message' rows='10' placeholder='Message'></textarea>
				<button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center duration-300'>Let's Collaborate</button>
			</form>
		</div>
	);
}
