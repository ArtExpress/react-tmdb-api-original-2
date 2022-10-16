import React, { useEffect, useState } from 'react';
import "./Header.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderImg from './ui/SliderImg';
import axios from "axios"

const Header = () => {
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

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots: true,
        centerPadding: "0px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
      };

    return (
        <div className="header">
            <Slider {...settings}>
                {movie.slice(0,6).map((result) => (
                    <>
                        <SliderImg image={`https://image.tmdb.org/t/p/w500/${result.backdrop_path}`} key={result.id} />
                    </>
                ))}
            </Slider>
        </div>
    );
}

export default Header;
