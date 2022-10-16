import React, { useEffect, useState } from 'react';
import "./MoviePage.css"
import Filler from "../assets/Filler.jfif"
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useParams } from "react-router-dom"
import axios from "axios"

const MoviePage = () => {
    const [movie, setMovie] = useState([])
    let { id }  = useParams()
    let movie_id = id
    console.log(movie_id)

    useEffect(() => {
        const getMovie = async () => {
          try {
            const  { data }  = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}
            ?api_key=b36fe2ec9427d7935223cf9570917d43&language=en-US`
            );
            setMovie(data);
            console.log(data)
          } catch (error) {
            console.error(error.message);
          }
        };
        getMovie();
      }, []);

    return (
        <div className="moviePage">
            <div className="moviePage__background--container">
                <img className="moviePage__background" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" /> 
            </div>

          <div className="movie__container">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            <h2>{movie.title}</h2>
          </div>

          <div className="movie__description--container"> 
            <div className="movie__descriptionTop">
              <button>Play</button>
              <button>Preview</button>
              <StarBorderOutlinedIcon />
              <span>{movie.release_date} </span>
              <FiberManualRecordIcon fontSize='small' />
              <span></span>
            </div>

            <div className="movie__descriptionBottom">
              <p> {movie.overview} </p>
            </div>
          </div>
        </div>
    );
}

export default MoviePage;

