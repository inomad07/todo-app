import React from "react";
import PropTypes from 'prop-types';

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

const Title = ({ children }) => {
    return (
        <div style={styles.header}>
            <div style={styles.title}>{children}</div>
        </div>
    );
};

Title.propTypes = {
    children: PropTypes.string
};

export default Title;