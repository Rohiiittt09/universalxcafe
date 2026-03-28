import React from 'react'
import Category from './Category'
import { useContext } from 'react'
import Footer from './Footer'
import { Link, useParams } from 'react-router-dom'
import { CartContext } from './Context'
import Cartbtn from './Cartbtn'



const Thali = () => {

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
        <div className='w-50 h-50  '><img className=' w-full h-full' src="img/thali0.webp" alt="" /></div>
        <div className='h-55 w-55 text-white '>
            <div className=' flex justify-between'><h1>gravy chaap thali</h1> <h1>Rs220</h1></div>
            <p className='text-[10px] sm:text-[14px]'>2roti/naan, gravy ,salad</p>
            <div className='flex justify-center items-center'><button className='cursor-pointer  w-30 h-8 sm:w-40 sm:h-9 lg:w-50 lg:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border   bg-black/50 text-[12px] sm:text-[18px] text-white rounded-2xl' onClick={(x)=>{sendata(220,"","gravy chaap thali","thali11",x)}}>add</button></div>
        </div>
      </div>
       <div className='h-100 w-60 border rounded-2xl border-yellow-400 flex flex-col justify-center items-center'>
        <div className='w-50 h-50  '><img className='w-full h-full' src="img/thali1.webp" alt="" /></div>
        <div className='h-55 w-55 text-white '>
            <div className='flex justify-between'><h1>royal thali </h1>Rs300</div>
            <p className='text-[10px] sm:text-[14px]'>dal makhani + shahi paneer + rice + raita + salad lacha pratha + roti</p>
            <div className='flex justify-center items-center'><button className='cursor-pointer  w-30 h-8 sm:w-40 sm:h-9 lg:w-50 lg:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border   bg-black/50 text-[12px] sm:text-[18px] text-white rounded-2xl' onClick={(x)=>{sendata(300,"","royal thali","thali12",x)}}>add</button></div>
        </div>
      </div>
      <div className='h-100 w-60 border rounded-2xl border-yellow-400 flex flex-col justify-center items-center'>
        <div className='w-50 h-50  '><img className='w-full h-full' src="img/thali2.webp" alt="" /></div>
        <div className='h-55 w-55 text-white '>
            <div className='flex justify-between'><h1>universal's special thali</h1>Rs380</div>
            <p className='text-[10px] sm:text-[14px]'>dal makhani + mix veg + shahi paneer butter masala + rice +mix raita +salad+lachha pratha +papad +5star</p>
            <div className='flex justify-center items-center'><button className='cursor-pointer  w-30 h-8 sm:w-40 sm:h-9 lg:w-50 lg:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border   bg-black/50 text-[12px] sm:text-[18px] text-white rounded-2xl' onClick={(x)=>{sendata(380,"","UNIVERAL THALI","thali13",x)}}>add</button></div>
        </div>
      </div>
      </div>
      <Cartbtn/>
    </div>
  )
}

export default Thali
