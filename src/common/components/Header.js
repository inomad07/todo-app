import React from 'react';
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

function Header() {
    return (
        <div style={styles.header}>
            <div style={styles.title}>To-Do List</div>
        </div>
    );
};

Header.propTypes = {
    children: PropTypes.string
};

export default Header;