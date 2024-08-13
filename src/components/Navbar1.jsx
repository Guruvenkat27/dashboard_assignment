import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaClock } from "react-icons/fa6";
const Navbar1 = () => {
  return (
    <div>
        <nav className='flex px-11 items-center justify-between py-5'>
            <h1 className='font-bold'>CNAPP Dashboard</h1>
            <div className='flex gap-6 items-center nav1-butt'>
                <button className=' otherbutton flex items-center gap-4 px-2 py-[8px]'>Add Widget <FaPlus /></button>
                <button className=' otherbutton opacity-70  px-1 py-[8px]'><FaArrowsRotate /></button>
                <button className=' otherbutton opacity-70  px-1 py-[8px]'><BsThreeDotsVertical /></button>
                <button className='flex items-center gap-2 px-2 py-[8px] border-blue-800 timebutton'><span><FaClock className='text-[16px]' />
                </span><span className='font-bold'>Last 2 days</span><IoIosArrowDown /></button>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar1
