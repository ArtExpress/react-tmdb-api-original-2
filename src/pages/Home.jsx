import React from 'react';
import FilterHeader from '../components/FilterHeader';
import Header from '../components/Header';
import New from '../components/New';
import Original from '../components/Original';
import Trending from '../components/Trending';
import "./Home.css"


const Home = () => {
    return (
        <div className="home">
            <Header />
            <FilterHeader />
            <New />
            <Trending />
            <Original />
        </div>
    );
}

export default Home;

