import React from 'react'
import { Link } from 'react-router-dom'


const Category = (prop) => {
  return (
    <div className=' flex flex-col justify-center items-cente w-25 sm:w-30'>
        <Link to={`/${prop.jsn}`}>
        <div className=' sm:w-30 w-25 flex justify-center items-center'>
            <div  ><img className='sm:w-25 sm:h-25 w-20 h-20 rounded-full' src={prop.image} alt="" /></div>
        </div>
        <div className='flex justify-center items-center text-[10px] sm:text-[16px] text-white fo'><h1>{prop.Category}</h1></div>
        </Link>
    </div>
  )
}

export default Category
