import React, { useEffect, useState } from 'react';
import Movie from '../components/ui/Movie';
import "./MoviesPage.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const MoviesPage = () => {
    const [movie, setMovie] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const getMovie = async () => {
            try {
                const { data } = await axios.get(
                    "https://api.themoviedb.org/3/search/multi?api_key=b36fe2ec9427d7935223cf9570917d43&language=en-US&page=1&include_adult=false"
                )
                setMovie(data.results)
            } catch (error) {
                console.error(error.message)
            }
        }
        getMovie()
    }, [])
    return (
        <div className="moviesPage">
            <h3>Search Results for " "</h3>

            <div className="moviesPage__results--wrapper">
            {movie.slice(0,20).map((result) => (
                <>
                    <Movie
                    image={`https://image.tmdb.org/t/p/w500/${result.poster_path}`} 
                    onClick={() => navigate(`${result.id}`)}
                    key={result.id}
                    id={result.id} />
                </>
                ))}
            </div>
        </div>
    );
}

export default MoviesPage;
