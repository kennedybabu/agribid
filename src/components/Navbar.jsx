import React, { useState } from 'react'
import {IoMdClose} from "react-icons/io";
import {RiMenu3Fill, RiPlantFill} from 'react-icons/ri';
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <div className='w-full h-[60px] px-4 flex justify-between items-center'>
      <Link to='/' className='h-full flex items-center'>
          <p>agribid</p>
          <RiPlantFill className='ml-1' />          
      </Link>

      {/* links */}
      <div className='hidden md:flex'>
          <NavLink>Home</NavLink>
          <NavLink>Products</NavLink>
          <NavLink>Account</NavLink>
      </div>


      {/* toggle mobile nav */}
      <div onClick={(e) => setNav(!nav)} className='cursor-pointer md:hidden z-40'>
         {nav ? <IoMdClose /> :  <RiMenu3Fill />}
      </div>

      {nav ? (
        <div className='flex flex-col justify-center pl-14 fixed top-0 bottom-0 right-0 w-[60%] z-4 bg-slate-400'>
            <NavLink className='my-4'>Home</NavLink>
            <NavLink className='my-4'>Products</NavLink>
            <NavLink className='my-4'>Account</NavLink>
        </div>
      ) : null}
    </div>
  )
}

export default Navbar