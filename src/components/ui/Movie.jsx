import React from 'react';
import "./Movie.css"
import { Link } from "react-router-dom"

const Movie = ({ image, id }) => {
    return (
        <div className="movie">
            <Link to={`/${id}`}>
                <img src={image} alt="" />
            </Link>
        </div>
    );
}

export default Movie;
