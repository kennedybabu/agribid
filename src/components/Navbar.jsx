import React, { useState } from 'react'
import {IoMdClose} from "react-icons/io";
import {RiMenu3Fill, RiPlantFill} from 'react-icons/ri';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className='w-full h-[60px] px-4 flex justify-between items-center'>
      <div className='h-full flex items-center'>
          <RiPlantFill />
          <p>agribid</p>
      </div>

      {/* links */}
      <div className='hidden md:flex'>
          <NavLink>Home</NavLink>
          <NavLink>Products</NavLink>
          <NavLink>Account</NavLink>
      </div>


      {/* toggle mobile nav */}
      <div onClick={(e) => setNav(!nav)} className='cursor-pointer'>
         {nav ? <IoMdClose /> :  <RiMenu3Fill />}
      </div>

      {nav ? (
        <div className='hidden  flex-col w-[60%] z-4'>
            <NavLink>Home</NavLink>
            <NavLink>Products</NavLink>
            <NavLink>Account</NavLink>
        </div>
      ) : null}
    </div>
  )
}

export default Navbar