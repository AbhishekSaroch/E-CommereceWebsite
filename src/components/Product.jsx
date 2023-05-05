import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/Slices/cartSlice';
import {addtolike,removefromlike} from "../redux/Slices/likeSlice"
import { toast } from 'react-hot-toast';
const Product = ({item}) => {


  const {cart} =useSelector((state)=>state);
  const {like}=useSelector((state)=>state);
  
  
  const dispatch=useDispatch();

  const addtocart=()=>{
    dispatch(add(item));
    toast.success("Added To Cart")
  }
  const removefromcart=()=>{
    dispatch(remove(item.id))
    toast.success("Removed From Cart")
  }

  const addtolikecart=()=>{
    dispatch(addtolike(item));
  }
  const removefromlikecart=()=>{
    dispatch(removefromlike(item.id)); 
  }
  
  return (
    <div  className="flex flex-col items-center justify-center hover:scale-110 transition duration-300 ease-in shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] gap-3 p-4 mt-10 ml-5 rounded h-[50]   ">
    {/* Ye hai Title Desc Or Image Ki hai div */}
      <div>
        <p className="text-grey-700 font-semibold text-lg text-left mt-1">{item.title.split(" ").slice(0,3).join(" ")+ "..."}</p>
        <p className="w-40 text-gray-400 text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ")+ "..."}</p>
        <div className='flex items-center justify-center'>
        <img src={item.image} className='h-[200px] w-[150px]'></img>
        </div>
      </div>
    <div className='flex justify-evenly gap-10'>
      <div>${item.price}</div>
    < div className='flex justify-between items-center'>
    {
        cart.some((isspostkeliye)=>isspostkeliye.id==item.id) ? (<button  className=" text-grey-700  text-[12px] font-bold hover:bg-black-700 hover:text-green outline" onClick={removefromcart}>
          Remove From Cart
        </button >) : (<button className=" text-grey-700  text-[12px] outline hover:bg-black-100 hover:text-green font-bold" onClick={addtocart}>
          Add To Cart
        </button>)
      } 
      </div>
      <div>{
        like.some((p)=>p.id==item.id) ?(<button className=" text-grey-700 text-[12px] font-bold outline  hover:bg-black-700 hover:text-green" onClick={removefromlikecart}>Dislike</button>) :(<button  className=" text-grey-700  px-2 hover:bg-black-700 hover:text-green text-[12px] font-bold outline"onClick={addtolikecart}>Like</button>)
        }</div>
    </div>
    </div>
  )
}

export default Product