"use client"
import { useState } from "react";

const Counter=()=> {
    const [count,setCount]= useState(0);
    return (
     <div>
        <h1> Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)} className="btn btn-primary">Increase</button>
        <button onClick={()=>setCount(count-1)} className=" btn btn-primary">Decrease</button>
     </div>
    );
  }
  
  export default Counter