import React, { useEffect, useState } from 'react';
import "./Nav.css"
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import TheatersIcon from '@mui/icons-material/Theaters';
import HomeIcon from '@mui/icons-material/Home';
import Logo from "../assets/Logo.png"
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { Link } from "react-router-dom"

const Nav = () => {
    const [search, setSearch] = useState()
    const navigate = useNavigate()
    const [movie, setMovie] = useState([])

    const getMovie = async () => {
        try {
            const { data } = await axios.get(
                "https://api.themoviedb.org/3/search/multi?api_key=b36fe2ec9427d7935223cf9570917d43&language=en-US&page=1&include_adult=false"
            )
            setMovie(data.results)
            console.log(data.results)
        } catch (error) {
            console.error(error.message)
        }
    }
    
    useEffect(() => {
        getMovie()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch('')
    }
    
    

    return (
        <div className="nav">
            <div className="nav__left">
                <a href="/">
                    <img className="nav__logo" src={Logo} alt=""/>
                </a>
            </div>

            <div className="nav__center">
                <form onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    value={search}
                    onChange={(event) => setSearch(console.log(event.target.value))}
                    />
                </form>
                <SearchIcon />
            </div>

            <div className="nav__right">
                <a href="/">
                    <HomeIcon />
                    <p>Home</p>
                </a>
                <a href="/">
                    <TheatersIcon />
                    <p>Movies</p>
                </a>
                <a href="/">
                    <StarIcon />
                    <p>Popular</p>
                </a>
                <button className='nav__button'>
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default Nav;
