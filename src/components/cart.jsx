import React, { useState,useEffect, useRef } from "react";
import { useContext } from "react";
import { CartContext } from "./Context";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Cart = () => {
    
    
    const [cost, setcost] = useState(0)
  
  const onsubmit = (data) => {
    let msg = "order detail:\n\n";
    cart.forEach((item, index) => {
      msg += `${index + 1}. ${item.name} ${item.type} Qty:${item.qty} - Rs${item.price * item.qty}\n`;
    });
    msg += `\n name:${data.name}`;
    msg += `\n phone:${data.tel}`;
    msg += `\n address:${data.address}`;
    msg+=`\n\n total payment = ${cost}`
    const url = `https://wa.me/9034958645?text=${encodeURIComponent(msg)}`;
    setCart([])
    window.open(url);

  };
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const { cart, setCart } = useContext(CartContext);
  useEffect(() => {
    let num = 0
    cart.map((e)=>{
        num=num+(e.price*e.qty)
       
        return num
    })
    setcost(num)

  }, [cart])
  
  const cancel = (e) => {
    const array = [];
    cart.map((x) => {
      if (x.id == e) {
      } else {
        array.push(x);
      }
      return array;
    });
    setCart(array);
  };
  const inc = (e) => {
    const arr = [...cart];
    arr.map((x) => {
        
      if (x.id == e) {
        x.qty = x.qty + 1;

        return arr;
      }
    });
    setCart(arr);
  };
  const dec = (e) => {
    const arr = [...cart];
    
    arr.map((x) => {
      if (x.id == e) {
        if (x.qty > 1) {
          x.qty = x.qty - 1;
          return arr;
        }
      }
    });
    setCart(arr);
  };
  if (cart.length == 0) {
    return (
      <div className="w-screen  h-screen flex flex-col border ">
        <div className=" w-3/5  m-auto flex flex-col justify-center items-center ">
          <h1 className="text-[16px] sm:text-2xl italic text-white pfo">
            Your cart is empty Looks like you haven’t added anything yet.
          </h1>
          <p className="text-white pfo italic text-[14px] sm:text-[20px] mt-2">
            please go back to menu
          </p>
          <div className="mt-10">
            <Link to="/menu">
              <button className=" cursor-pointer    w-35 h-7 sm:w-60 sm:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border  text-white bg-[rgb(67,35,11)] text-[18px] sm:text-[22px] rounded-2xl">
                Menu
              </button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  return (
    <div className="  w-screen h-screen   flex flex-col  sm:gap-5 ">
      <div className="mt-20 gap-2  flex flex-col ga sm:gap-2 ">
        {cart.map((e) => {
          return (
            <div className=" flex  w-5/6 sm:w-3/5 m-auto justify-between  italic text-white gap-5 border ">
              <div className="  flex w-3/5 justify-between sm:text-[16px] text-[8px] items-center ">
                <h1>{e.name}</h1>
                <h1>{e.type}</h1>
                <h1>Rs{e.price * e.qty}</h1>
              </div>
              <div className="  flex w-2/5 sm:w-2/7 justify-around items-center ">
                <div className="flex justify-center items-center sm:h-full w-10 h-4 sm:w-20  ">
                  <button
                    className="border rounded-2xl text-[8px] sm:text-[14px] text-white bg-[rgb(67,35,11)] h-full w-full  cursor-pointer hover:bg-[rgb(143,79,31)]  "
                    onClick={() => {
                      cancel(e.id);
                    }}
                  >
                    <h4>cancel</h4>
                  </button>
                </div>
                <div className=" flex w-3/5 justify-around border items-center ">
                  <div className="w-1/3 flex justify-center items-center">
                    <button
                      onClick={() => {
                        dec(e.id);
                      }}
                      className="sm:text-[18px] text-[10px] text-white bg-[rgb(67,35,11)] w-full cursor-pointer hover:bg-[rgb(143,79,31)]   "
                    >
                      -
                    </button>
                  </div>
                  <div className="text-[10px] sm:text-[18px] w-1/3 border-[rgb(67,35,11)] flex justify-center  ">
                    {e.qty}
                  </div>
                  <div className="w-1/3 flex justify-center items-center">
                    <button
                      onClick={() => {
                        inc(e.id);
                      }}
                      className="text-[10px] sm:text-[18px] w-full text-white bg-[rgb(67,35,11)] cursor-pointer hover:bg-[rgb(143,79,31)]  "
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="  m-auto border flex w-5/6 sm:w-3/5  sm:text-3xl italic text-white justify-between pl-5 pr-5">
            <div className=""><h1>Total</h1></div>
            <div className=" "><h1>Rs{cost}</h1></div>
            
        </div>
      </div>

      <div>
        <div>
          <form
            className=" flex-col flex justify-center items-center gap-5 mt-10"
            action=""
            onSubmit={handleSubmit(onsubmit)}
          >
            <div className=" w-4/6 flex gap-1  sm:w-3/5 ">
              <h1 className="w-1/5 text-white text-[8px] sm:text-[16px] ">
                Name :
              </h1>
              <input
                className="border-2 border-white bg-black/50 rounded-2xl sm:h-10 flex items-center h-5 w-4/5 text-white text-[8px] sm:text-[16px] "
                placeholder=" enter your name"
                type="text"
                {...register("name", {
                  required: true,
                  minLength: {
                    value: 2,
                    message: "please enter correct name ",
                  },
                })}
              />
            </div>
            {errors.name && (
              <div className=" text-[8px] sm:text-[14px] italic text-red-600">
                {errors.name.message}
              </div>
            )}
            <div className="flex w-4/6 gap-1  sm:w-3/5">
              <h1 className="w-1/5 text-white text-[8px] sm:text-[16px]  ">
                Phone No. :
              </h1>
              <input
                className="border-2 border-white w-4/5 h-5 sm:h-10 bg-black/50 rounded-2xl flex items-center text-white text-[8px] sm:text-[16px]  "
                placeholder="enter your phone number"
                type="tel"
                {...register("tel", {
                  required: true,
                  minLength: {
                    value: 9,
                    message: "please enter correct number",
                  },
                  maxLength: {
                    value: 10,
                    message: "please enter correct number",
                  },
                })}
              />
            </div>
            {errors.tel && (
              <div className=" text-[8px] sm:text-[14px] italic text-red-600">
                {errors.tel.message}
              </div>
            )}
            <div className=" flex w-4/6 gap-1  sm:w-3/5 ">
              <h1 className="w-1/5 text-white text-[8px] sm:text-[16px] ">
                address :
              </h1>
              <textarea
                className="border-2 border-white bg-black/50 rounded-2xl flex items-center w-4/5 text-white text-[8px] sm:text-[16px]  "
                placeholder="enter your address"
                name=""
                id=""
                {...register("address", {
                  required: true,
                  message: "enter correct address",
                })}
              ></textarea>
            </div>
            {errors.address && (
              <div className=" text-[8px] sm:text-[14px] italic text-red-600">
                {errors.address.message}
              </div>
            )}
            {/* {errors.error1&&<div>{errors.error1.message}</div>} */}
            <input
              className=" cursor-pointer w-50 h-7 sm:w-80 sm:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border  text-white bg-[rgb(67,35,11)] text-[12px] sm:text-[18px] rounded-2xl"
              disabled={isSubmitting}
              type="submit"
              value="Send Order via WhatsApp "
            />
            <div className="">
            <Link to="/menu">
            <button className=" cursor-pointer    w-50 h-7 sm:w-80 sm:h-10 hover:bg-white hover:text-[rgb(67,35,11)] border  text-white bg-[rgb(67,35,11)] text-[12px] sm:text-[18px] rounded-2xl">
                Go Back To Menu
              </button>
            </Link>
          </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Cart;
