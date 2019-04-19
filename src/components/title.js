import React from "react";

const Title = (props) => {
    const {children} = props;

    return (
        <div className="header">
            <div className="title">{children}</div>
        </div>
    );
};


export default Title;