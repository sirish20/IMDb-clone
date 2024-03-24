
import Image from "next/image";
import React from "react";

const Loading = ()=>{
    
    return <div className="h-full flex justify-center items-center mt-[10%] ">
               <Image src="spinner.svg" alt="" width={100} height={100}></Image>
           </div> 
}

export default Loading;