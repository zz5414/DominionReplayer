import React from 'react';
import './Card.scss'

const Card = ({src_img, left_number, right_number, children}) => {
    return (
        <div className="card_wrap">
            <img src={src_img}/>
            <div className="left_number">{left_number}</div>
            <div className="right_number">{right_number}</div>
        </div>
    );
};

export default Card;