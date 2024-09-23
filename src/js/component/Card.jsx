import React from "react";
import '/workspaces/react-hello/src/styles/index.css';

export const Card = ({ img, cardTitle, description, price }) => {
    return (
        <div className="card compact-card h-100 d-flex flex-column mt-1 mb-1">
            <div className="image-holder">
                <img src={img} className="card-img-top img-fluid" alt={cardTitle} />
            </div>
            <div className="card-body d-flex flex-column justify-content-between">
                <div className="text-start">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                    <p className="card-text mb-0"><strong>{price}</strong></p>
                    <a href="#" className="btn btn-primary btn-sm">Buy it Now!</a>
                </div>
            </div>
        </div>
    );
};
