import React from 'react';
import "./SliderImg.css"

const SliderImg = ({ image }) => {
    return (
        <div className="img__wrapper">
            <a href="/">
                <img className="sliderImg" src={image} alt="" />
            </a>
        </div>
    );
}

export default SliderImg;
