import React from "react";
import Card from "./Card";

const Results = ({results})=>{
    return(
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 max-w-6xl py-4 mx-auto">
            {
               results.map((results)=>(
                    <Card key={results.id} result={results}/>
               ))
            }
        </div>
    )
}
export default Results;