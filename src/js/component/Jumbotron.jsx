import React from "react";
import '/workspaces/react-hello/src/styles/index.css'


export const Jumbotron = ({title, description}) =>{


    return (
        <div className="container-fluid Jumbotron bg-light">
            <div className="row mt-5">
                <div className="col-12 mt-3">
                    <h1 className="text-center text-light">{title}</h1>
                </div>
                <div className="col-12">
                    <p className="text-center text-light">{description}</p>
                </div>
                <div className="col-12 mb-3 d-flex justify-content-center mt-3">
                    <button type="button" className="btn btn-primary">Contact Us!</button>
                </div>
            </div>
        </div>
    )
}