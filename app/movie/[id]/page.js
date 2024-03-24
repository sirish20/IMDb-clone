import Image from "next/image";
import React from "react";
import { FaThumbsUp } from "react-icons/fa";


export default async function MoviePage({params}){
    const MovieId = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${
    MovieId}?api_key=${process.env.API_KEY}`);
    const  movie = await res.json();
    return(
        <div className="w-full h-full">
            <div className="md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
            <Image
                src={`http://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} height={300} width={500}
                className="rounded-lg" placeholder="blur" blurDataURL="/spinner.svg" alt="Image not Available.">
            </Image>
            <div className="pl-[5%] flex flex-col  gap-3">
                    <h2 className="text-2xl font-bold">{movie.title || movie.name}</h2>
                    <p className="text-lg">{movie.overview}</p>
                    <p className="w-full text-lg flex items-center "><span className="font-semibold text-lg mr-2">Date Released: </span>{movie.release_date || movie.first_air_date}</p>
                    <p className="w-full text-lg flex items-center "><span className="font-semibold text-lg mr-2">Rating: </span>{movie.vote_count}</p>

            </div>
            </div>
        </div>
    )
}


