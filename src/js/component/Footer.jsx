import React from "react";
import '/workspaces/react-hello/src/styles/index.css'


export const Footer= ({text}) =>{
    

    return(
        <div className="container-fluid footer bg-dark text-light text-center w-100 h-100 mt-5">
            <p>{text}</p>
        </div>
    )
}