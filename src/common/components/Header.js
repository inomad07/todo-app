import React from 'react';

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

export default Header