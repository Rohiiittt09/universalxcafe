import React, { useEffect } from 'react'
import Footer from './Footer'
import { useRef } from 'react'


const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
    const removeBtn=useRef()
    const chimg =useRef()
    const showimg = (x)=>{
        removeBtn.current.style.display="flex"
       
        chimg.current.src = x
       
         
    }
    const remove =()=>{
        removeBtn.current.style.display="none"

    }
    const bigimg=()=>{
        console.log("hh")
        return (
            <div className='fixed z-20 w-screen h-100 bg-red-500'>hello</div>

        )
    }
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='z-5 absolute  top-0 w-screen justify-center flex  h-120  ' ><img className='w-10/11 hidden md:flex  ' loading='lazy' src="img/cafehome.webp " alt="" /><img className='w-full top-0 flex md:hidden h-130  ' loading='lazy' src="img/cafehome1.webp " alt="" /></div>
      <div className='w-screen h-120 bg-black/50 z-10 relative'>
      <div className='  w-full  h-4/5  flex flex-col justify-center '>
        <h1 className=' text-4xl sm:text-6xl   font-bold text-yellow-400 text-center 
drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] 
[ text-shadow:0_0_20px_rgba(255,215,0,0.9),0_0_40px_rgba(255,215,0,0.6) ] fo italic  '> Explore the Ambiance</h1>
         <p className='  ont-bold text-yellow-400 text-center 
drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] 
[ text-shadow:0_0_20px_rgba(255,215,0,0.9),0_0_40px_rgba(255,215,0,0.6) ] fo '>Discover the beauty, comfort, and memorable moments from our cafe and party hall.</p></div>
      </div>
     <div className='w-screen flex justify-center items-center bg-black/50 '>
         <div className=' flex justify-center w-60 sm:w-3/5 bg-black/75 items-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] rounded-2xl transition-all duration-300'>
        <img className='sm:w-4/5 w-50 h-50 sm:h-100  lg:h-130 sm:mt-10 mt-5 mb-5 sm:mb-10 rounded-2xl ' src="img/gal101.jpeg" alt="" />
      </div>
     </div>
     <div ref={removeBtn} className=' bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300  fixed z-20 hidden top-1/5 pb-10 m-auto border border-white rounded-2xl w-70 h-70 sm:h-140 sm:w-140  flex-col justify-center items-center'>
     <button onClick={()=>{remove()}} className='text-2xl rounded-2xl border border-white w-2/5 text-white bg-black/78'>x</button>
     <img ref={chimg} className='sm:w-120 sm:h-120 w-60 h-60 ' src="img/gal1.webp" alt="" /></div>
      
     <div className='bg-black/50 pt-10'>
        <div className='w-screen '><h1 className='lg:w-1/5 w-2/5 text-[22px]  lg:text-5xl fo italic   bg-black/75 items-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] rounded-r-2xl transition-all duration-300'>Cafe View </h1></div>
      
        <div className=' w-screen flex justify-center items-center' >
      <div className=' grid-cols-3 grid lg:gap-5 gap-3 pt-5 pb-5  '>
      <div onClick={()=>{showimg("img/gal1.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 sm:h-35 sm:w-35 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30 w-20 h-20' loading='lazy' src="img/gal1.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/gal2.webp")}}  className='lg:w-60 lg:h-60 h-22 w-22 sm:h-35 sm:w-35 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50  sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/gal2.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/gal4.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 sm:h-35 sm:w-35 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/gal4.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/gal10.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 sm:h-35 sm:w-35 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/gal10.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/cafelogo.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 sm:h-35 sm:w-35 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-22 h-22' loading='lazy' src="img/cafelogo.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/gal6.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 sm:h-35 sm:w-35 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/gal6.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/gal7.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 sm:h-35 sm:w-35 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/gal7.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/gal5.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 sm:h-35 sm:w-35 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/gal5.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/gal9.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 sm:h-35 sm:w-35 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/gal9.webp" alt="" />
      
      </div>
      </div>
      </div>
      <div className='w-screen '><h1 className='lg:w-1/5 w-2/5 text-[22px]  lg:text-5xl fo italic   bg-black/75 items-center text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] rounded-r-2xl transition-all duration-300'>Hall View </h1></div>
      
        <div className=' w-screen flex justify-center items-center' >
      <div className=' grid-cols-3 grid lg:gap-5 gap-3 pt-5 pb-5  '>
      <div onClick={()=>{showimg("img/hal1.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300 sm:h-35 sm:w-35  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/hal1.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/hal2.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300 sm:h-35 sm:w-35  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/hal2.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/hal3.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300 sm:h-35 sm:w-35  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/hal3.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/hal4.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300 sm:h-35 sm:w-35  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/hal4.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/cafelogo.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300 sm:h-35 sm:w-35   justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-22 h-22' loading='lazy' src="img/cafelogo.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/hal5.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300 sm:h-35 sm:w-35  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/hal5.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/hal6.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300 sm:h-35 sm:w-35  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/hal6.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/hal7.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300 sm:h-35 sm:w-35  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50 sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/hal7.webp" alt="" />
      
      </div>
      <div onClick={()=>{showimg("img/hal8.webp")}} className='lg:w-60 lg:h-60 h-22 w-22 rounded-2xl flex bg-black/75  text-white shadow-[0_8px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(255,215,0,0.7)] transition-all duration-300 sm:h-35 sm:w-35  justify-center items-center  '><img className='absolute rounded-2xl lg:w-50 lg:h-50  sm:w-30 sm:h-30  w-20 h-20' loading='lazy' src="img/hal8.webp" alt="" />
      
      </div>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Gallery
