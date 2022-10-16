import React, { useEffect, useState } from 'react';
import "./Trending.css"
import Movie from './ui/Movie';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const Trending = () => {
    const navigate = useNavigate()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const getMovie = async () => {
            try {
                const { data } = await axios.get(
                    "https://api.themoviedb.org/3/movie/popular?api_key=b36fe2ec9427d7935223cf9570917d43&language=en-US&page=1"
                )
                setMovie(data.results)
            } catch (error) {
                console.error(error.message)
            }
        }
        getMovie()
    }, [])

    return (
        <div className="trending">
            <h4>Trending</h4>

            <div className="trendingMovies__wrapper">
                {movie.slice(0,5).map((result) => (
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

export default Trending;
