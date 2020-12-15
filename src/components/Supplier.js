import React from 'react';
import './Supplier.scss';
import Card from './Card';


const Supplier = () => {
    const arNodeTreasure = ["속주", "금", "공작령", "은", "사유지", "동", "저주"]
    const arNodeAction = ["마을","마을","마을","마을","마을","마을","마을","마을","마을","마을","마을","마을"]
    return (
        <div>
            <div className="box-container">
                <div className="box1">
                    {arNodeTreasure.map((name, i) =>{
                        return (<Card>{i}</Card>);
                    })}
                </div>
                <div className="box2">
                    {arNodeAction.map((name, i) =>{
                        return (<Card>{i}</Card>);
                    })}
                </div>
            </div>
        </div>
    );
};

export default Supplier;


