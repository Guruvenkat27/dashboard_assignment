import React from 'react'
import { FiSearch } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineBellAlert } from "react-icons/hi2";
const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between bg-white py-2 px-8'>
        <div className='flex items-center gap-2'>
<span className='flex items-center opacity-75 gap-2'>Home <IoIosArrowForward /> </span>
<span className='font-bold'>Dashboard V2</span>
        </div>
        <div className='flex items-center input-search'>
        <FiSearch />
            <input type="search" name="" id="" placeholder='Search anything'/></div>
            <div>
            <HiOutlineBellAlert />
            </div>
      </nav>
    </div>
  )
}

export default Navbar
