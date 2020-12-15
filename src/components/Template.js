import React from 'react';
import './Template.scss';

const Template = ({children}) => {
    return (
        <div className="Template">
            <div className="title"> Turn 4</div>
            <div className="content"> {children} </div>
        </div>
    );
};

export default Template;