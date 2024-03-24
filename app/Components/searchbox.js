"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Searchbox=()=>{
  const [search,setsearch]=useState("");
  const router = useRouter();
  function handleSubmit(e){
      e.preventDefault();
      if(!search)return;
      router.push(`/search/${search}`)
  }
  return (
     <form onSubmit={handleSubmit} className="flex max-w-6xl mx-auto justify-between items-center px-5">
      <input value={search} onChange={(e)=>{
        setsearch(e.target.value)
      }} type="text" placeholder="Search keywords..." className="w-full h-14 bg-transparent rounded-md placeholder-gray-500 outline-none flex-1" />
      <button disabled={!search} onSubmit={()=>{setsearch()}} type="submit" className="text-amber-500 disabled:text-gray-400">Submit</button>
     </form>
  )
}

export default Searchbox;