import React from "react";


const Section=({title,desc})=>{

    return (
        <div className="section">
            <h1>{title}</h1>
            <p>{desc}</p>
            <hr/>
        </div>
    )
}

export default Section