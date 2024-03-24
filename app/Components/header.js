import React from "react";
import Menuitem from "./menuitem";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import Link from "next/link";
import Switchmode from "./Switchmode";

const Header=()=>{
  return (
     <div className="flex items-center justify-between  py-4 px-[5%] ">
        <div className="flex gap-10">
               <Menuitem title="HOME" address="/" Icon={ FaHome }/>
               <Menuitem title="ABOUT" address="/About" Icon={ FaCircleInfo  }/>
        </div>
        <div className="flex gap-10 items-center ">
               <Switchmode/>
               <Link href="/" className="text-2xl">
                   <span className="font-bold bg-amber-500 px-2 py-1 rounded text-black mr-1 hover:bg-amber-600">IMDb</span>
                   <span className="font-xl hidden sm:inline">Clone</span>
               </Link>
        </div>
     </div>
  )
}

export default Header;