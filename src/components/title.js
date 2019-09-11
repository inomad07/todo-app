import React from "react";

const styles = {
    header: {
        backgroundColor: "skyblue",
        padding: 15
    },
    title: {
        textAlign: "center",
        color: "white"
    }
};


const Title = (props) => {
    const {children} = props;

    return (
        <div style={styles.header}>
            <div style={styles.title}>{children}</div>
        </div>
    );
};



export default Title;