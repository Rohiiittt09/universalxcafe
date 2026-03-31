import React from 'react'
import { useForm } from "react-hook-form"


const Form = () => {
    const onsubmit =(data)=>{
        const msg =`
        name:${data.name}
        phone no.:${data.tel}
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
    <div className=' flex flex-col mt-10 '>
        <div className='italic w-4/5  sm:w-2/5 flex  '><h1 className='text-[16px] w-3/4 text-white bg-black/75 rounded-r-2xl lg:text-3xl lg:w-3/5 '>Contact Form</h1></div>
        <div>
            <form className=' flex-col flex justify-center items-center gap-5 mt-10' action="" onSubmit={handleSubmit(onsubmit)}>
                <div className=' w-5/6 flex gap-1  sm:w-3/5 '><h1 className='w-1/5 text-white text-[8px] sm:text-[16px] '>Name :</h1><input className='border-2 border-white/50 w-4/5 bg-black/60 rounded-2xl text-white/80 sm:p-2 text-[8px] sm:text-[16px] ' placeholder=' enter your name' type="text" {...register("name",{required:true,minLength:{value:2,message:"please enter correct name "}})} /></div>
                {errors.name&&<div className=' text-[8px] sm:text-[14px] italic text-red-600'>{ errors.name.message}</div>}
                <div className='flex w-5/6 gap-1  sm:w-3/5'><h1 className='w-1/5 text-white text-[8px] sm:text-[16px]  '>Phone No. :</h1><input className='border-2 text-white/30  w-4/5  bg-black/60 rounded-2xl  text-[8px] sm:p-2 sm:text-[16px] border-white/80 ' placeholder='enter your phone number' type="tel"{...register("tel",{required:true,minLength:{value:9,message:"please enter correct number"},maxLength:{value:10,message:"please enter correct number"}})} /></div>   
                     {errors.tel&&<div className=' text-[8px] sm:text-[14px] italic text-red-600'>{ errors.tel.message}</div>}
                <div className=' flex w-5/6 gap-1  sm:w-3/5 '><h1 className='w-1/5 text-white text-[8px] sm:text-[16px] '>Message :</h1><textarea className='border-2 border-white/50  w-4/5  bg-black/60 rounded-2xl text-white/80 sm:p-2 text-[8px] sm:text-[16px]  ' placeholder='write your message' name="" id="" {...register("message",{required:true,message:"enter message"})}></textarea></div>
                {errors.message&&<div className=' text-[8px] sm:text-[14px] italic text-red-600'>{ errors.message.message}</div>}
        {/* {errors.error1&&<div>{errors.error1.message}</div>} */}
        <input className=' w-50 h-7 sm:w-80 sm:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border  text-white text-[12px] sm:text-[18px] rounded-2xl' disabled={isSubmitting} type="submit" value="Send Message via WhatsApp " />


      </form>
        </div>
      
    </div>
  )
}

export default Form
