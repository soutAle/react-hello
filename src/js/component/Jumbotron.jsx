import React from "react";
import '/workspaces/react-hello/src/styles/Jumbotron.css';

export const Jumbotron = ({ title, description }) => {
    return (
        <div className="container-fluid Jumbotron d-flex align-items-center justify-content-center text-dark">
            <div className="row mt-5 text-center">
                <div className="col-12 mt-3">
                    <h1 className="display-4 fw-bold">{title}</h1>
                </div>
                <div className="col-12 description-text">
                    <p className="lead">{description}</p>
                </div>
                <div className="col-12 mb-3 d-flex justify-content-center mt-4">
                    <button type="button" className="btn btn-lg btn-outline-dark">Contact Us!</button>
                </div>
            </div>
        </div>
    );
};
