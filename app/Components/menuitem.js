import Link from "next/link";
import React from "react";

const Menuitem=({title,address,Icon})=>{
  return (
     <Link href={address} className= "hover:text-amber-500 text-2xl">
        <Icon className="inline sm:hidden"/>
        <p className="hidden sm:inline">{title}</p>
    </Link>
  )
}

export default Menuitem;