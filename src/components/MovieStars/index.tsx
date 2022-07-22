import { Star, StarHalf } from 'phosphor-react';
import React from 'react';
import './style.css'


const index = () => {
    return (
        <div className="dsmovie-stars-container">
            <Star size={32} color={'#FFBB3A'} weight={'fill'}/>
            <Star size={32} color={'#FFBB3A'} weight={'fill'}/>
            <Star size={32} color={'#FFBB3A'} weight={'fill'}/>
            <StarHalf size={32} weight="fill" color={'#FFBB3A'} />
            <Star size={32} color={'#FFBB3A'} />
        </div>
    );
};

export default index;