import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';

import { CartContext } from "./Context";


const Cartbtn = () => {
    const [num, setnum] = useState(0)
    const { cart, setCart } = useContext(CartContext);
    useEffect(() => {
     setnum(cart.length)
    }, [cart])
    


  return (
    <div>
        
       <Link to="/cart">
        <button className=' cursor-pointer fixed z-20 top-6/7 right-4   sm:top-5/6 sm:right-10 w-25 h-12 sm:w-20 flex justify-center items-center sm:h-10   border  text-white bg-[rgb(67,35,11)] text-[12px] sm:text-[18px] rounded-2xl'>
        <div className={num>=1?"bg-red-700 rounded-full text-white h-5 flex justify-center items-center absolute top-0  w-5":"hidden"}></div>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 3H5L6.6 12.59C6.7 13.21 7.23 13.66 7.86 13.66H17.4C18 13.66 18.52 13.25 18.65 12.66L20 7H6" 
        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="9" cy="20" r="1.5" fill="white"/>
  <circle cx="17" cy="20" r="1.5" fill="white"/>
</svg></button>
    
        </Link>
    </div>
  )
}

export default Cartbtn
