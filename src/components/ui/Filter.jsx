import React from 'react';
import "./Filter.css"

const Filter = ({ icon, name }) => {
    return (
        <div className='filter'>
            <div className="filter__item">
                <a href="/">
                    {icon}
                    <p>{name}</p>
                </a>
            </div>
        </div>
    );
}

export default Filter;
