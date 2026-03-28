import React from 'react'
import Category from './Category'
import { useContext } from 'react'
import Footer from './Footer'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from './Context'
import Cartbtn from './Cartbtn'



const Combo = () => {

    const {cart,setCart}=useContext(CartContext)
       const sendata =(price,type,name,id,btn)=>{
    
            if(cart.length==0){
                setCart([...cart,{"id":id,"name":name,"price":price,"type":type,"qty":1}])
    
            }else{
                const num = cart.find(item=>item.id==id)
            if(num){
    
            }else{
                setCart([...cart,{"id":id,"name":name,"price":price,"type":type,"qty":1}])
            }
            }
            btn.target.style.backgroundColor="green"
            btn.target.innerText="Added"
            
    
        }
  return (
    <div>
         <div className='bg-black/50 p-5 sco flex w-screen  overflow-x-scroll gap-3 sm:gap-10'>
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
      <div className='min-h-screen bg-black/50 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-10 pt-10'>
      <div className='h-100 w-60 border rounded-2xl border-yellow-400 flex flex-col justify-center items-center'>
        <div className='w-50 h-50  '><img className=' w-full h-full' src="img/combo1.webp" alt="" /></div>
        <div className='h-55 w-55 text-white '>
            <h1>just Rs699</h1>
            <p>any one veg medium pizza 2 veg double pizza + garlic bread + coke + fries</p>
            <div className='flex justify-center items-center'><button className='cursor-pointer  w-30 h-8 sm:w-40 sm:h-9 lg:w-50 lg:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border   bg-black/50 text-[12px] sm:text-[18px] text-white rounded-2xl' onClick={(x)=>{sendata(699,"","699 combo","combo1",x)}}>add</button></div>
        </div>
      </div>
       <div className='h-100 w-60 border rounded-2xl border-yellow-400 flex flex-col justify-center items-center'>
        <div className='w-50 h-50  '><img className='w-full h-full' src="img/combo2.webp" alt="" /></div>
        <div className='h-55 w-55 text-white '>
            <h1>just Rs499</h1>
            <p>any one medium pizza + any pasta + fries +coke</p>
            <div className='flex justify-center items-center'><button className='cursor-pointer  w-30 h-8 sm:w-40 sm:h-9 lg:w-50 lg:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border   bg-black/50 text-[12px] sm:text-[18px] text-white rounded-2xl' onClick={(x)=>{sendata(499,"","499 combo","combo2",x)}}>add</button></div>
        </div>
      </div>
      </div>
      <Cartbtn/>
    </div>
  )
}

export default Combo
