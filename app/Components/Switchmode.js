"use client"
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";


const Switchmode=()=>{
    const {systemTheme,theme,setTheme} = useTheme();
    const currentTheme = theme==="system"?systemTheme:theme;
    const[Mounted,setMounted]=useState(false);
    useEffect(()=>{
         setMounted(true);
    },[])
  return (
     <>
        {Mounted && (currentTheme==="dark" ? <IoSunny className="text-2xl cursor-pointer hover:text-amber-500" onClick={()=>setTheme("light")}/>  : <IoMoonSharp className="text-2xl cursor-pointer hover:text-amber-500" onClick={()=>setTheme("dark")}/>)}
     </>
  )
}

export default Switchmode;