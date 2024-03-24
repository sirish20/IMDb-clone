"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

const Navbaritem=({title,param})=>{
    const searchParam=useSearchParams();
    const genre = searchParam.get("genre");
  return (
    <div className={`hover:text-amber-500 font-semibold ${genre && genre===param && "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg" }`}>
        <Link href={`/?genre=${param}`}>{title}</Link>
    </div>
     
  )
}

export default Navbaritem;
