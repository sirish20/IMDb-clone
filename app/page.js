import React from "react";
import Results from "./Components/Results";

const API_KEY = process.env.API_KEY

export default async function Home({searchParams}){
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-us&page=1`,{next: {revalidate: 10000000 }} );
  const data = await res.json();
  const results = data.results;
  if(!res.ok){
    throw new Error("Falied to fetched data.")
  }
  return <div>
    <Results results={results}/>
  </div>
}
