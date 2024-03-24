"use client"
import React, { useEffect } from "react";

const Error = ({error,reset})=>{
    useEffect(()=>{
        console.log(error);
    },[error]);
    return <div className="h-full flex flex-col justify-center items-center mt-[10%] ">
        <h1 className="text-xl">Something went wrong</h1>
        <button onClick={()=>reset()} className="mt-[3%] bg-red-600 px-3 py-2 rounded text-white hover:bg-red-700">Try Again</button>
    </div> 
}

export default Error;