import { useState } from "react";

export function Trigger(){
    const[count,setcount]=useState(0)
    
 return(
    <>
    <p>{count}</p>
    <button onClick={()=>setcount(count+1)}></button>
    </>
 )
}