import React from 'react';
import './Supplier.scss';
import MiniCard from './MiniCard';

import imgA from '../images/m노상강도_v2.png'

const Supplier = () => {
    const arNodeTreasure = ["속주", "금", "공작령", "은", "사유지", "동", "저주"]
    const arNodeAction = ["마을","마을","마을","마을","마을","마을","마을","마을","마을","마을","마을","마을"]
    return (
        <div>
            <div className="box-container">
                <div className="box1">
                    {arNodeTreasure.map((name, i) =>{
                        return (<MiniCard src_img={imgA}>{i}</MiniCard>);
                    })}
                </div>
                <div className="box2">
                    {arNodeAction.map((name, i) =>{
                        return (<MiniCard src_img={imgA}>{i}</MiniCard>);
                    })}
                </div>
            </div>
        </div>
    );
};

export default Supplier;


