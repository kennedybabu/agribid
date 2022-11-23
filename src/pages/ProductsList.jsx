import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"

const ProductsList = () => {
  return (
    <div className='w-full '>
      <div className='banner w-full h-[25vh]'>
          
      </div>
      <div className="px-4">
        <div className='w-full px-4 flex items-center py-2 border bottom-2 my-6 rounded-[25px]'>
          <input type="text" placeholder='search' />     
          <BiSearchAlt2 className='text-[#ced4da]'/>   
        </div>
        <div className='grid grid-cols-1'>
            <div className="hidden side-bar">
              <p>Refine Category</p>
            </div>
            <div className='w-full grid grid-cols-1'>
              <div className="product w-[240px] mx-auto shadow-md rounded-md h-[300px] bg-slate-400 flex flex-col items-center justify-center">
                  <p>card</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList