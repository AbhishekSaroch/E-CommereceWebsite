import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import LikeItem from"../components/LikeItem"
const Like = () => {

    const {like}=useSelector((state)=>state);
   
   
  return (
    <div className='flex justify-center items-center'>
       {
        like.length>0 ?(<div>
            {like.map((item,index)=>(
                <LikeItem index={index} item={item} key={item.id}/>
            ))}
        </div>) :(<div>
            oops kuch to like kro bhai !
        </div>)
       }
    </div>
  )
}

export default Like