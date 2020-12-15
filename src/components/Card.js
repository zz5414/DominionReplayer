import React from 'react';
import './Card.scss'

import imgA from '../images/m노상강도_v2.png'

const Card = ({children}) => {
    return (
        <div className="card_wrap">
            <img src={imgA}/>
            <div className="number">{children}</div>            
        </div>
    );
};

export default Card;