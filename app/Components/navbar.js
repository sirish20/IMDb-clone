import React from "react";
import Navbaritem from "./navbaritem";

const Navbar=()=>{
  return (
     <div className="dark:bg-gray-600 bg-yellow-100 flex gap-[7%] items-center justify-center py-2 sm:text-lg">
         <Navbaritem title="Trending" param="fetchTrending"/>
         <Navbaritem title="Top Rated" param="fetchTopRated"/>
     </div>
  )
}

export default Navbar;