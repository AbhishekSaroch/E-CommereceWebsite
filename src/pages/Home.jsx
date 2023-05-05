import { useEffect, useState } from "react";
import Product from "../components/Product";
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const[posts,setposts]=useState([]);
  const [loading,setloading]=useState(false);

  async function fetchData(){
    setloading(true);
   try {
    
    const data=await fetch(API_URL);
    const output=await data.json();
    setposts(output);
    
   } 
   catch (error) {
    alert("Network Call Error");
    setposts([]);
   }
   setloading(false);
  }

useEffect(()=>{
  fetchData();
},[])

  return  <div>
    {
    loading ? (<div className="flex justify-center items-center mx-auto">Data Coming</div>) : 

    posts.length>0 ?
    (<div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-1 xs:grid-cols-1 max-w-6xl mx-auto space-y-10 space-x-10 min-h-18vh  ">
     { posts.map((item)=>(
        <Product key={item.id} item={item}/>
      ))}
     </div>) :(<div className="flex items-center justify-center">No DATA FOUND</div>)
   }
  </div>
};

export default Home;
