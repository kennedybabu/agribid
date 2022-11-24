import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"
import {BsFillArrowRightCircleFill} from "react-icons/bs"

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
            <div className="hidden lg:flex p-4 flex-col w-[350px] side-bar  bg-slate-100 rounded-md">
                <div className='w-full'>
                  <h3 className='font-semibold mb-2'> Refine by <span className='font-bold'>Category</span></h3>
                  <hr />
                  <p className='flex cursor-pointer mt-2 items-center'><BsFillArrowRightCircleFill className='text-green-600 mr-2'/>Fruits</p>
                  <p className='flex cursor-pointer items-center'><BsFillArrowRightCircleFill className='text-green-600 mr-2'/>Vegetables</p>
                  <p className='flex cursor-pointer items-center'><BsFillArrowRightCircleFill className='text-green-600 mr-2'/>Cereals</p> 
                </div>  
                <div className="w-full my-4">
                  <h3 className='font-semibold mb-2'>agribid <span className='font-bold'>Highlights</span></h3>
                  <hr />
                  <div className='w-full'>
                    <div className='w-full flex items-center'>
                        <input type="checkbox" name="deals" id="deals"  className='mr-2'/>
                        Deals of the Day 
                      </div>
                      <div className='w-full flex items-center'>
                        <input type="checkbox" name="free-shipping" id="free-shipping"  className='mr-2'/>
                        Free Shipping
                      </div>
                      <div className='w-full flex items-center'>
                        <input type="checkbox" name="best-sellers" id="best-sellers"  className='mr-2'/>
                        Best Sellers
                      </div> 
                      <div className='w-full flex items-center'>
                        <input type="checkbox" name="featured" id="featured"  className='mr-2'/>
                        Featured Products
                      </div>      
                  </div>
                  <div className='w-full my-4'>
                      <h3 className='mb-2 font-bold'>sort by <span>Tags</span></h3>
                      <hr />
                      <div className="w-full flex flex-wrap">
                        <div className='border mb-1 rounded-[25px] mr-1 border-gray-400  px-1 cursor-pointer hover:bg-green-600 hover:text-white'>vegetables</div>
                        <div className='border mb-1 rounded-[25px] mr-1 border-gray-400  px-1 cursor-pointer hover:bg-green-600 hover:text-white'>Juices</div>
                        <div className='border mb-1 rounded-[25px] mr-1 border-gray-400  px-1 cursor-pointer hover:bg-green-600 hover:text-white'>food</div>
                        <div className='border mb-1 rounded-[25px] mr-1 border-gray-400  px-1 cursor-pointer hover:bg-green-600 hover:text-white'>healthy</div>
                        <div className='border mb-1 rounded-[25px] mr-1 border-gray-400  px-1 cursor-pointer hover:bg-green-600 hover:text-white'>natural</div>
                      </div>
                  </div>
                </div>          
            </div>           
            <div className='bg-slate-100 w-full mx-4'>
              <div className="h-full py-2 px-2 w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4">
                  <div className="product mt-2 w-[220px] mx-auto shadow-md rounded-md h-[300px] bg-slate-400 flex flex-col items-center justify-center">
                      <p>card</p>
                  </div>
                  <div className="product  my-2 w-[220px] mx-auto shadow-md rounded-md h-[300px] bg-slate-400 flex flex-col items-center justify-center">
                      <p>card</p>
                  </div><div className="product my-2 w-[220px] mx-auto shadow-md rounded-md h-[300px] bg-slate-400 flex flex-col items-center justify-center">
                      <p>card</p>
                  </div><div className="product  my-2 w-[220px] mx-auto shadow-md rounded-md h-[300px] bg-slate-400 flex flex-col items-center justify-center">
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