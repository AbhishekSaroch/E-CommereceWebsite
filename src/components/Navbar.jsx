import { NavLink } from "react-router-dom";
import {BsCartFill} from "react-icons/bs"
import { useSelector } from "react-redux";
import {cart} from "../redux/Slices/cartSlice"
const Navbar = () => {
  const {like}=useSelector((state)=>state);
  const {cart}=useSelector((state)=>state);
  return <div className="bg-black text-white flex justify-between items-center">

    {/* Image Waali Div */}
    <div>
      <NavLink to="/">
      <img src="../logo.png" className="h-14"/>
      </NavLink>
    </div>

    <div className="flex items-center justify-around gap-10 mr-4">
      <NavLink to="/">
      <p>Home</p>
      </NavLink>

      <NavLink to="/cart">
        <div className="absolute top-0 ">
        <span className=" h-[5] relative top-4 font-semibold animation-bounce  bg-white">{cart.length>0 ? (<div>{cart.length}</div>) :(<div></div>)}</span>
       <BsCartFill/>
      </div>
      </NavLink>
      <NavLink to="/like">
      Your Favourites <span>{like.length>0 ? (<div>{like.length}</div>) :(<div></div>)}</span>
      </NavLink>
    </div>
  </div>;
};

export default Navbar;
