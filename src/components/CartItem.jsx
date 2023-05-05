import React from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";


const CartItem = ({ item, index }) => {
  
  const dispatch = useDispatch();
  
  const removefromcart = () => {
    dispatch(remove(item.id));
    toast.error("Removed Succesfully");
  };

  return (
    <div>
      <div >
        <div>
          <img src={item.image} ></img>
        </div>
        <div>
          <h1 className="font-semibold">{item.title}</h1>
          <h1 className="gap-10 text-1xl font-italic">{item.description}</h1>
          <div className="flex justify-around items-center">
            <p className="text-2xl font-semibold text-green-600">${item.price}</p>
            <div className="bg-red-200 rounded-sm px-2 py-2 cursor-pointer"onClick={removefromcart}>
              <AiFillDelete className="text-2xl" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
