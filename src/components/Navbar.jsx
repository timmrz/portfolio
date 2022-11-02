import React, { useState } from "react";
import Logo from "../img/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='logo' />
      </div>

      {/* menu */}

      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={400}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={400}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={400}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={400}>
            Works
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={400}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* mobile menu */}
      {nav && (
        <ul className='absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex items-center flex-col justify-center'>
          <li className='py-6 text-4xl '>
            <Link onClick={handleClick} to='home' smooth={true} uration={400}>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl '>
            <Link onClick={handleClick} to='about' smooth={true} duration={400}>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl '>
            <Link
              onClick={handleClick}
              to='skills'
              smooth={true}
              duration={400}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl '>
            <Link onClick={handleClick} to='work' smooth={true} duration={400}>
              Works
            </Link>
          </li>
          <li className='py-6 text-4xl '>
            <Link
              onClick={handleClick}
              to='contact'
              smooth={true}
              duration={400}>
              Contact
            </Link>
          </li>
        </ul>
      )}

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%]  left-0'>
        <ul>
          <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 flex justify-between items-center'>
            <a
              href=''
              className='flex justify-between items-center w-full text-gray-300'>
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333] flex justify-between items-center'>
            <a
              href=''
              className='flex justify-between items-center w-full text-gray-300'>
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] flex justify-between items-center'>
            <a
              href=''
              className='flex justify-between items-center w-full text-gray-300'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] flex justify-between items-center'>
            <a
              href=''
              className='flex justify-between items-center w-full text-gray-300'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
