import React from 'react'
import { useSelector } from 'react-redux'
import { AiFillDelete } from 'react-icons/ai';
const LikeItem = ({item,index}) => {
    const {like} =useSelector((state)=>state);
   
  return (
    <div className='flex sm:flex-wrap gap-10 mt-5 border-2 border-black px-5 '>
      <div>
        <img className='h-[150px] w-[100px]' src={item.image}></img>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <p className='lg:text-2xl md:1xl sm:1xlfont-bold '>{item.title}</p>
        <p className='flex items-center justify-center '>$<span className='font-bold text-green-400 text-2xl'>{item.price}</span></p>
        </div>
    </div>
  );
};
  


export default LikeItem