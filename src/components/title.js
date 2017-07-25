import React, { Component } from "react";

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


class Title extends Component {
    render() {
        const { children } = this.props;

        return (
            <div style={styles.header}>
                <div style={styles.title}>{children}</div>
            </div>
        );
    }
}



export default Title;