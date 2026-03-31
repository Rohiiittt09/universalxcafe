import React from 'react'
import Footer from './components/Footer'
import { useForm } from "react-hook-form"

const Hallbook = () => {
     const onsubmit =(data)=>{
        const msg =`
        Hall Booking Enquiry....
        name:${data.name}
        phone no.:${data.tel}
        event :${data.event}
        date:${data.date}
        guests :${data.guests}
        message:${data.message}`
        const url = `https://wa.me/9034958645?text=${encodeURIComponent(msg)}`
        window.open(url)
        reset()
    }
     const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors,isSubmitting},
  } = useForm()
  return (
    <div>
        <div className='w-screen  bg-black/50 flex flex-col gap-0 border-black '>

        <div className='w-full  h-120 '>
            <div className=' relative  m-auto h-100 bg-center bg-cover bg-no-repeat    w-4/5 '>
            <div className='w-full h-full absolute top-0 hidden sm:flex'><img className='h-full w-full' src="img/hallbg.webp" alt="" /></div>
            <div className='w-full h-full  absolute top-0 flex sm:hidden '><img className='h-full w-full' src="img/hal1.webp" alt="" /></div>
            
            <div className='w-full h-full z-50 border border-white bg-black/50 justify-center flex items-center'>
            <h1 className='text-[16px] sm:text-6xl w-4/5 smw-3/5   font-bold text-yellow-400 text-center 
drop-shadow-[0_0_10px_rgba(255,215,0,0.8)] 
[ text-shadow:0_0_20px_rgba(255,215,0,0.9),0_0_40px_rgba(255,215,0,0.6) ] fo italic ' >Premium Party Hall for Your Special Moments</h1>
            </div>
            </div>
        </div>
    </div>
    <div className='  bg-black/50 w-screen flex flex-col justify-center items-center text-white/77 gap-3 fo '>
    <h1 className='text-[16px] sm:text-2xl'>Planning a party or event?</h1>
    <p className='text-[12px] sm:text-[22px] w-full flex justify-center   text-center items-center'>Fill out the form below to get customized pricing based on your requirements. Our team will contact you with complete details.</p>
    </div>
    <div className='bg-black/50 top-0 border-black pb-5 '>
        <form className=' flex-col flex justify-center items-center gap-5 pt-10' action="" onSubmit={handleSubmit(onsubmit)}>
                <div className=' w-5/6 flex gap-1  sm:w-3/5 '><h1 className='w-1/5 text-white text-[8px] sm:text-[16px] '>Name :</h1><input className='border-2 bg-black/50 p-2 text-white/80 rounded-2xl border-white/80 w-4/5 text-[8px] sm:text-[16px] ' placeholder=' enter your name' type="text" {...register("name",{required:true,minLength:{value:2,message:"please enter correct name "}})} /></div>
                {errors.name&&<div className=' text-[8px] sm:text-[14px] italic text-red-600'>{ errors.name.message}</div>}
                <div className='flex w-5/6 gap-1  sm:w-3/5'><h1 className='w-1/5 text-white text-[8px] sm:text-[16px]  '>Phone No. :</h1><input className='border-2 bg-black/50 p-2 text-white/80 rounded-2xl   w-4/5  text-[8px] sm:text-[16px] border-white/50 ' placeholder='enter your phone number' type="tel"{...register("tel",{required:true,minLength:{value:9,message:"please enter correct number"},maxLength:{value:10,message:"please enter correct number"}})} /></div>   
                     {errors.tel&&<div className=' text-[8px] sm:text-[14px] italic text-red-600'>{ errors.tel.message}</div>}
                <div className='flex w-5/6 gap-1  sm:w-3/5'><h1 className='w-1/5 text-white text-[8px] sm:text-[16px]  '>Event Type:</h1><input className='border-2 bg-black/50 p-2 text-white/80 rounded-2xl  w-4/5  text-[8px] sm:text-[16px] border-white/50 ' placeholder='Birthday, Anniversary, Party, etc'type="text"{...register("event",{required:true})} /></div>   
                <div className='flex w-5/6 gap-1  sm:w-3/5'><h1 className='w-1/5 text-white text-[8px] sm:text-[16px]  '>Number of Guests:</h1><input className='border-2 bg-black/50 p-2 text-white/80 rounded-2xl  w-4/5  text-[8px] sm:text-[16px] border-white/50 ' placeholder=' Enter Number of Guests' type="number"{...register("guests",{required:true})} /></div>   
                <div className='flex w-5/6 gap-1  sm:w-3/5'><h1 className='w-1/5 text-white text-[8px] sm:text-[16px]  '>Event Date:</h1><input className='border-2 bg-black/50 p-2 text-white/80 rounded-2xl   w-4/5  text-[8px] sm:text-[16px] border-white/50 ' placeholder='Enter Event date ' type="date"{...register("date",{required:true} )}/></div>   
                <div className=' flex w-5/6 gap-1  sm:w-3/5 '><h1 className='w-1/5 text-white text-[8px] sm:text-[16px] '>Message :</h1><textarea className='border-2 bg-black/50 p-2 text-white/80 rounded-2xl border-white/50  w-4/5 text-[8px] sm:text-[16px]  ' placeholder='write your message' defaultValue={""} name="" id="" {...register("message")}></textarea></div>
                
                
        <input className=' w-50 h-7 sm:w-80 sm:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border  text-white text-[12px] sm:text-[18px] rounded-2xl' disabled={isSubmitting} type="submit" value="Send Message via WhatsApp " />


      </form>
    </div>
    <Footer/>
    </div>
  )
}

export default Hallbook
