import React from "react";
import './title.css';

const Title = (props) => {
    const {children} = props;

    return (
        <div className="header">
            <div className="title">{children}</div>
        </div>
    );
};


export default Title;