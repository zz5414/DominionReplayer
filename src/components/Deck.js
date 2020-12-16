import React from 'react';
import Card from './Card';
import "./Deck.scss";

import copper from '../images/동.png'
import silver from '../images/은.png'
import artisan from '../images/장인.png'
import hain from '../images/하인.png'

const Deck = () => {
    return (
        <div className="deck_wrap">
            <div className="user1">
                <h1>zz5414</h1>
                <Card src_img={artisan} left_number={1} right_number={-3}/>
                <Card src_img={hain} left_number={1}/>
                <Card src_img={copper} left_number={3}/>
                <Card src_img={silver} left_number={1}/>
            </div>

            <div className="user2">
                <h1>yuby0312</h1>
                <Card src_img={artisan} left_number={1} right_number={-3}/>
                <Card src_img={hain} left_number={1}/>
                <Card src_img={copper} left_number={3}/>
                <Card src_img={silver} left_number={1}/>
            </div>

            <div className="user3">
                <h1>seagull1205</h1>
                <Card src_img={artisan} left_number={1} right_number={-3}/>
                <Card src_img={hain} left_number={1}/>
                <Card src_img={copper} left_number={3}/>
                <Card src_img={silver} left_number={1}/>                
            </div>
        </div>
    );
};

export default Deck;