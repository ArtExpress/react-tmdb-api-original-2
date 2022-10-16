import React from 'react';
import "./FilterHeader.css"
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import Filter from './ui/Filter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FilterHeader = () => {
    return (
        <div className='filterHeader'>
            <div className="filter__list">

                <Filter icon={<ViewHeadlineIcon />} name="All"/>
                <Filter icon={<ExpandMoreIcon />} name="Popular"/>
                <Filter icon={<ExpandMoreIcon />} name="Just Released"/>
                <Filter icon={<ExpandMoreIcon />} name="Genre"/>
                <Filter icon={<ExpandMoreIcon />} name="Rating"/>
                <Filter icon={<ExpandMoreIcon />} name="Age Rating"/>
                <Filter icon={<ExpandMoreIcon />} name="Disney Movies"/>
                <Filter icon={<ExpandMoreIcon />} name="Random"/>

            </div>
        </div>
    );
}

export default FilterHeader;
