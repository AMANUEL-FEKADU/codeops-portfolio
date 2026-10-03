'use client'
import { useState } from "react";
import CatagoryBar from "./CatagoryBar";


export default function MenuLayout({ children }) {
   const [count,setCount]=useState(0)
  const add=()=>{
    setCount(count+1)
  }
    return (
   
     
    <div>
        <CatagoryBar/>
        <button onClick={add}>Add</button>
        <h3>{count}</h3>
        
        <main>{children}</main>

    </div>
      
     
  
  );
}
