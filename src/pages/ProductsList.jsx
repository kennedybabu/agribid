import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"

const ProductsList = () => {
  return (
    <div className='w-full '>
      <div className='banner w-full h-[25vh]'>
          
      </div>
      <div className="px-4">
        <div className='w-full px-4 flex items-center py-2 border bottom-2 my-6 rounded-[25px]'>
          <input type="text" placeholder='search' className='borderless text-sm' />     
          <BiSearchAlt2 className='text-[#ced4da]'/>   
        </div>
        <div className='w-full flex  flex-row'>
            <div className="hidden lg:flex w-[400px] side-bar  bg-slate-400">
              <p>Refine Category</p>

            </div>
            <div className='bg-slate-100 w-full mx-4'>
              <div className="h-full py-2 w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4">
                  <div className="product mt-2 w-[240px] mx-auto shadow-md rounded-md h-[300px] bg-slate-400 flex flex-col items-center justify-center">
                      <p>card</p>
                  </div>
                  <div className="product  my-2 w-[240px] mx-auto shadow-md rounded-md h-[300px] bg-slate-400 flex flex-col items-center justify-center">
                      <p>card</p>
                  </div><div className="product my-2 w-[240px] mx-auto shadow-md rounded-md h-[300px] bg-slate-400 flex flex-col items-center justify-center">
                      <p>card</p>
                  </div><div className="product  my-2 w-[240px] mx-auto shadow-md rounded-md h-[300px] bg-slate-400 flex flex-col items-center justify-center">
                      <p>card</p>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList