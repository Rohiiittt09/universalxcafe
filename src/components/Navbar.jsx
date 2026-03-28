import React from 'react'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = (prom) => {
  
  return (

    <div className='w-screen flex-col sm:flex-row sticky top-0 z-40   flex justify-center h-20 m-auto  bg-black/50 ' >
        <div className='w-10/11 z-20   m-auto h-14    mt-5  '>
        <div className='w-full flex-col sm:flex-row flex  items-center justify-between'>
            <div className='flex   justify-baseline gap-3 items-center w-full sm:w-1/5'>
                <div className='w-14  '><img className='' src="img/cafelogo.webp"  alt="" /></div>
                <div className='flex justify-around text-[10px] sm:text-[16px] font-bold text-yellow-400 text-center 
drop-shadow-[0_0_6px_rgba(255,215,0,0.6)] fo '><h1>Universal X Cafe</h1>
                </div>
            </div>
            <div className=' sm:w-3/5 w-full'>
                <div className='   '>
      <nav className=''><ul className=' flex justify-around text-[10px] sm:text-[16px] font-bold text-yellow-400 text-center 
drop-shadow-[0_0_6px_rgba(255,215,0,0.6)] fo  '> 
          <NavLink className={(e)=>{return e.isActive?"act":""}} to="/"><li className=''>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"act":""}} to="/menu"><li>Menu</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"act":""}} to="/Gallery"><li>Gallery</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"act":""}} to="/About"><li>About</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"act":""}} to="/Contact"><li>Contact</li></NavLink>
          </ul></nav>
      </div>
            </div>

        </div>
        </div>

    </div>
  )
}

export default Navbar
