import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

 
const Menucard = (prom) => {
  const [allData, setallData] = useState([])
  useEffect(() => {
      const fetchdata=async ()=>{
        const res = await fetch("/data/allmenu.json")
        const data = await res.json()
        setallData(data)
      }
      fetchdata()
      
    }, [])
  
  return (
    <div className=' flex m-0 justify-around border-3 border-[rgb(67,35,11)] sm:p-2 rounded-2xl bg-black/54 cursor-pointer w-30 h-40 sm:h-80 sm:w-50 lg:h-80 lg:w-60 '>
      
        {allData.map((e)=>{
          if(e.id==prom.id){
            return<> <div className='sm:w-50 sm:h-70   h-40 w-28 flex flex-col items-center justify-center   '>
              <div ><img className='sm:h-50 sm:w-50 w-24 h-24 rounded-2xl' src={e.image} alt="" /></div>
              <div className=' w-25 sm:w-full'>
                <h1 className='italic text-[rgb(241,237,234)] sm:text-[18px] text-[10px]'>{e.name}</h1>
                
                
                
              </div>
              <div><Link to={`/item/${e.id}`} ><button className='text-white bg-[rgb(67,35,11)] sm:text-[12px] sm:w-20 sm:h-7 rounded-2xl text-[8px] w-14 h-5 hover:text-[rgb(67,35,11)]  hover:bg-white border cursor-pointer '>Order Now</button></Link></div>
            </div></>
          }
        })}
    </div>
  )
}

export default Menucard
