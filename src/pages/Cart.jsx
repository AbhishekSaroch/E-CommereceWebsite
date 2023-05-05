import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {
  //State KO Return
  const { cart } = useSelector((state) => state);
  const [totalamount, settoatlamount] = useState(0);

  //cart ke aaray me change to
  useEffect(() => {
    settoatlamount(cart.reduce((pcc, curr) => pcc + curr.price, 0));
  }, [cart]);


  return (
    <div>
      {cart.length > 0 ? (
        // add To cart ke andar wala section
        <div className="flex">
          <div>
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
          </div>
          <div>
            <div >Your Cart</div>
            <div >Summary</div>
            <p >
              <span >Total Items : {cart.length}</span>
            </p>
            <div className="font-semibold text-2xl ">
            <p>Total Amount :${totalamount}</p>
            <button className="text-center border bg-green-300 text-[20px] px-3 py-2 rounded w-80">CheckOut Now</button>
          </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center flex-col mx-auto min-h-[80vh] ">
          <h2 className="text-3xl font-semibold">Cart Is Empty !</h2>
          <Link to={"/"} className="border bg-[#74ce74] text-2xl font-semibold text-white rounded  py-2 px-2 flex items-center justify-center mt-5">Shop Now</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
