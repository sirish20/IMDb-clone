import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const Card = ({result})=>{
    
    return(
        <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-150 group">
            <Link href={`/movie/${result.id}`}>
                <Image
                src={`http://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} width={300} height={200}

                className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200" placeholder="blur" blurDataURL="/spinner.svg" alt="Image not Available.">
                </Image>
                <div className="p-2">
                    <p className="line-clamp-2 text-md">{result.overview}</p>
                    <h2 className="truncate text-lg font-bold">{result.title || result.name}</h2>
                    <p className="flex items-center justify-between">{result.release_date || result.first_air_date}<p className="flex items-center gap-2"><FaThumbsUp/>{result.vote_count}</p></p>
                </div>
            </Link>
            
        </div>
    )
}

export default Card;