import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import { Link, useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from './Context'





const Itemcard = ({allData}) => {
    
   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {cart,setCart}=useContext(CartContext)
  const [num, setnum] = useState(0)
      
      useEffect(() => {
       setnum(cart.length)
      }, [cart])
      
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
    const p = useParams()
  return (
    <div className=' flex flex-col'>
        <div className='flex flex-col justify-center sm:flex-row   w-screen mt-10 '>
            {allData.map((e)=>{
        if(e.id==(p.id)){
            return (<div className='sm:flex-row  w-screen flex flex-col justify-around items-center' key={e.id}>
                <div className='p-5 border-2 rounded-2xl bg-black/50 sm:w-fit w-4/5 border-yellow-400 '><img className='sm:70 sm:h-60 lg:w-100 rounded-2xl lg:h-90 w-full '  src={`/${e.image}`} alt="" /></div>

                <div className='sm:w-70 sm:h-full  border-yellow-400 lg:w-1/3 border-2 bg-black/50 rounded-2xl h-70 lg:h-full p-5 flex flex-col w-4/5 mt-5 sm:mt-0 '>

                    <div className=' w-full   p-5 flex justify-between '>
                    <h1 className=' text-[20px]   lg:text-4xl italic text-white underline'>{e.name}</h1>
                    <h1 className='text-[16px]  lg:text-3xl italic text-white '>Rs{parseInt(e.price)}</h1>
                </div>
                <div className='w-full   p-5 flex flex-col text-[12px] sm:gap-0 lg:gap-2 sm:text-[16px]  lg:text-2xl text-white italic'>
                    {(()=>{
                        if(e.pricehalf==""&&e.pricefull==""&&e.pricemedium==""&&e.pricesmall==""&&e.pricelarge==""){
                            return <div className=' w-full flex justify-center'><button className='cursor-pointer  w-30 h-8 sm:w-40 sm:h-9 lg:w-50 lg:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border   bg-black/50 text-[12px] sm:text-[18px] text-white rounded-2xl' onClick={(x)=>{sendata(e.price,"",e.name,e.id+"no",x)}}>Add</button></div>
                        }else{
                            return (
                                <div>
                                    <div className='flex  w-full justify-between text-white'><h3>half : Rs{parseInt(e.pricehalf)}</h3>{e.pricehalf !== "" && <button className='cursor-pointer  w-16 h-4 sm:w-20 sm:h-7  lg:w-40 lg:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border  text-white bg-[rgb(67,35,11)] text-[12px] sm:text-[18px] rounded-2xl' onClick={(x)=>{sendata(e.pricehalf,"half",e.name,e.id+"h",x)}}>Add</button>}</div>
                    <div className='flex  w-full justify-between text-white'><h3>full : Rs{parseInt(e.pricefull)}</h3>{e.pricefull !== "" && <button className='cursor-pointer  w-16 h-4 sm:w-20 sm:h-7 lg:w-40 lg:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border  text-white bg-[rgb(67,35,11)] text-[12px] sm:text-[18px] rounded-2xl' onClick={(x)=>{sendata(e.pricefull,"full",e.name,e.id+"f",x)
                    }} >Add</button>}</div>
                    <div className='flex  w-full justify-between text-white'><h3>medium : Rs{parseInt(e.pricemedium)}</h3>{e.pricemedium !== "" && <button className='cursor-pointer  w-16 h-4 sm:w-20 sm:h-7 lg:w-40 lg:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border  text-white bg-[rgb(67,35,11)] text-[12px] sm:text-[18px] rounded-2xl' onClick={(x)=>{sendata(e.pricemedium,"medium",e.name,e.id+"m",x)
                    }} >Add</button>}</div>
                    <div className='flex  w-full justify-between text-white'><h3>small : Rs{parseInt(e.pricesmall)}</h3>{e.pricesmall !== "" && <button className='cursor-pointer  w-16 h-4 sm:w-20 sm:h-7 lg:w-40 lg:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border  text-white bg-[rgb(67,35,11)] text-[12px] sm:text-[18px] rounded-2xl' onClick={(x)=>{sendata(e.pricesmall,"small",e.name,e.id+"s",x)
                    }} >Add</button>}</div>
                    <div className='flex  w-full justify-between text-white '><h3>large : Rs{parseInt(e.pricelarge)}</h3>{e.pricelarge !== "" && <button className='cursor-pointer  w-16 h-4 sm:w-20 sm:h-7 lg:w-40 lg:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border  text-white bg-[rgb(67,35,11)] text-[12px] sm:text-[18px] rounded-2xl' onClick={(x)=>{sendata(e.pricelarge,"large",e.name,e.id+"l",x)
                    }}>Add</button>}</div>
                                </div>
                            )
                        }
                    })()
                    }
                </div>
                </div>
            </div>)
        }
      })}
        </div>
      <div className=' w-screen flex flex-col justify-center items-center gap-5  mt-5'>
        <div><Link to="/menu"><button className='cursor-pointer   w-30 h-7 sm:w-40 sm:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border italic text-white bg-[rgb(67,35,11)] text-[12px] sm:text-[18px] rounded-2xl'><div><h1>Add More Items</h1></div></button></Link></div>
      <div><Link to='/cart'><button className=' relative cursor-pointer  flex justify-center items-center w-25 h-10 sm:w-25 sm:h-10  hover:text-[rgb(67,35,11)] border italic   text-white bg-[rgb(67,35,11)] text-[12px] sm:text-[18px] rounded-2xl'><div>
        <div className={num>=1?"bg-red-700  rounded-full text-white h-5 flex justify-center items-center absolute top-0  w-5":"hidden"}></div>
        
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3 3H5L6.6 12.59C6.7 13.21 7.23 13.66 7.86 13.66H17.4C18 13.66 18.52 13.25 18.65 12.66L20 7H6" 
        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="9" cy="20" r="1.5" fill="white"/>
  <circle cx="17" cy="20" r="1.5" fill="white"/>
</svg></div></button></Link></div>
    
      </div>
      <Footer/>
      </div>
  )
}

export default Itemcard
