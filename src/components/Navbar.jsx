import React, { useState } from "react";
import Logo from "../img/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Resume from "../files/resume.pdf";

export default function Navbar() {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className='h-[86px] w-full fixed  bg-[#0a192f] text-gray-300 p-3 '>
			<div className=' max-w-[1600px] mx-auto h-full flex justify-between items-center px-4'>
				<div>
					<img src={Logo} alt='logo' height={70} />
				</div>

				{/* menu */}

				<ul className='hidden md:flex'>
					{/* <li>
					<Link
						to='home'
						smooth={true}
						duration={400}>
						Home
					</Link>
				</li> */}
					<li>
						<Link className='hover:text-pink-600 duration-300 text-xl hover:text-2xl' to='home' smooth={true} duration={400}>
							About
						</Link>
					</li>
					<li>
						<Link className='hover:text-pink-600 duration-300 text-xl hover:text-2xl' to='skills' smooth={true} duration={400}>
							Skills
						</Link>
					</li>
					<li>
						<Link className='hover:text-pink-600 duration-300 text-xl hover:text-2xl' to='work' smooth={true} duration={400}>
							Works
						</Link>
					</li>
					<li>
						<Link className='hover:text-pink-600 duration-300 text-xl hover:text-2xl' to='contact' smooth={true} duration={400}>
							Contact
						</Link>
					</li>
				</ul>

				{/* hamburger */}
				<IconContext.Provider value={{ className: "h-full w-full" }}>
					<div onClick={handleClick} className='md:hidden z-10 h-8 w-8'>
						{nav ? <FaTimes className='h-full w-full' /> : <FaBars height={50} />}
					</div>
				</IconContext.Provider>
			</div>

			{/* mobile menu */}
			{nav && (
				<ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex items-center flex-col justify-center'>
					<li className='py-6 text-4xl '>
						<Link onClick={handleClick} to='home' smooth={true} duration={400}>
							About
						</Link>
					</li>
					<li className='py-6 text-4xl '>
						<Link onClick={handleClick} to='skills' smooth={true} duration={400}>
							Skills
						</Link>
					</li>
					<li className='py-6 text-4xl '>
						<Link onClick={handleClick} to='work' smooth={true} duration={400}>
							Works
						</Link>
					</li>
					<li className='py-6 text-4xl '>
						<Link onClick={handleClick} to='contact' smooth={true} duration={400}>
							Contact
						</Link>
					</li>
				</ul>
			)}

			{/* social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%]  left-0'>
				<ul>
					<li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 flex justify-between items-center'>
						<a target='_blank' href='https://www.linkedin.com/in/tsimafei-maroz-8b4541263/' className='flex justify-between items-center w-full text-gray-300'>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>

					<li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333] flex justify-between items-center'>
						<a target='_blank' href='https://github.com/timmrz' className='flex justify-between items-center w-full text-gray-300'>
							Github <FaGithub size={30} />
						</a>
					</li>

					<li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] flex justify-between items-center'>
						<a target='_blank' href='mailto:tsimafei.maroz@gmail.com' className='flex justify-between items-center w-full text-gray-300'>
							Email <HiOutlineMail size={30} />
						</a>
					</li>

					<li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] flex justify-between items-center'>
						<a target='_blank' href={Resume} className='flex justify-between items-center w-full text-gray-300'>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
