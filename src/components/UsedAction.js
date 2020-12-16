import React from 'react';
import Card from './Card';
import './UsedAction.scss'

import cn from 'classnames';


import copper from '../images/동.png'
import silver from '../images/은.png'
import artisan from '../images/장인.png'
import hain from '../images/하인.png'
import dummy from '../images/dummy.png'

const UsedAction = () => {
    const log_text = `Turn 6 - zz5414
    z starts their turn.
    z plays 방앗간.
    z draws 공동묘지.
    z gets +1 Action.
    z plays 방앗간.
    z shuffles their deck.
    z draws 동.
    z gets +1 Action.
    z discards 동 and 공동묘지.
    z gets +$2.
    z plays 3 동. (+$3)
    z buys and gains 방앗간.
    z shuffles their deck.
    z draws 3 동, 은 and 고물상.
    `

    return (
        <div className="action_wrap">
            <div className="play_card">
                <Card src_img={artisan} left_number={1}/>
                <Card src_img={hain} left_number={1}/>
                <Card src_img={copper} left_number={3}/>
                <Card src_img={silver} left_number={1}/>
            </div>
            <div className="interaction">
                <Card src_img={silver} right_number={"+1"}/>
                <Card src_img={dummy} />
                <Card src_img={dummy} />
                <Card src_img={artisan} right_number={"+1"}/>
            </div>
            <div className="log">
                {log_text.split('\n').map(line => {
                    return (<span>{line}<br/></span>)
                })}
            </div>
        </div>
    );
};

export default UsedAction;