import React from 'react'
import { useState,useEffect } from 'react'
import Menucard from './Menucard'
import Footer from './Footer'
import Category from './Category'
import Cartbtn from './Cartbtn'



const Chaap = () => {
  const [allData, setallData] = useState([])
  const [visible, setVisible] = useState(10)
    
    useEffect(() => {
      const fetchdata=async ()=>{
        const res = await fetch("/data/chaap.json")
        const data = await res.json()
        setallData(data)
       
      }
      fetchdata()
      const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    ) {
      setVisible((prev) => prev + 10);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
    }, [])
  return (
    <div className=''>
       <div className='bg-black/50 p-5 sco flex w-screen  overflow-x-scroll gap-3 sm:gap-10 '>
        <Category image={"img/chaap1.webp"} Category={"chaap"} jsn={"chaap"}/>
        <Category image={"img/burger1.webp"} Category={"fastfood"} jsn={"fasffod"}/>
        <Category image={"img/combo1.webp"} Category={"combo offer"} jsn={"combo"}/>
        <Category image={"img/pz1.webp"} Category={"pizza & pasta"} jsn={"pizzapasta"}/>
        <Category image={"img/rice1.webp"} Category={"rice & raita"} jsn={"riceraita"}/>
        <Category image={"img/m1.webp"} Category={"main course"} jsn={"maincoourse"}/>
        <Category image={"img/thali2.webp"} Category={"thalis"} jsn={"thali"}/>
        <Category image={"img/n1.webp"} Category={"noodles"} jsn={"noodle"}/>
        <Category image={"img/sn2.webp"} Category={"snack"} jsn={"snack"}/>
        <Category image={"img/soup1.webp"} Category={"soup & salad"} jsn={"soupsalad"}/>
        <Category image={"img/pr1.webp"} Category={"breads & prathas"} jsn={"bread"}/>
        
      </div>
      <div className=' min-h-screen pt-10 grid sm:grid-cols-3 bg-black/50  grid-cols-2 lg:grid-cols-4 place-items-center place-content-start gap-5'>
     {allData.slice(0,visible).map((e)=>{
      return <Menucard  id={e.id}/>
     })}
    </div>
    <Cartbtn/>
    <Footer/>
    </div>
    )
}

export default Chaap
