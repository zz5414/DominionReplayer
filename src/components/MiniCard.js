import React from 'react';
import './MiniCard.scss'


const MiniCard = ({src_img, children}) => {
    return (
        <div className="mini_card_wrap">
            <img src={src_img}/>
            <div className="mini_number">{children}</div>            
        </div>
    );
};

export default MiniCard;