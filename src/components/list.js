import React, { Component } from "react";

class List extends Component {
    renderItem = (text, i) => {
        const { onClickItem } = this.props;
        const { onSelectItem } = this.props;
        const { onEditItem } = this.props;
        return (
            <div style={styles.item } >
                {text}&nbsp;&nbsp;&nbsp;
                <button onClick={() => onClickItem(i)}>Delete</button>
                <button onClick={() => onSelectItem(i)}>Select</button>
                <button onClick={() => onEditItem(i)}>Edit</button>
            </div>
        );
    };

    changeColor = () => this.setState(prev => ({ color: prev.color === '#0095ff' ? '' : '#0095ff' }));

    render() {
        const { list } = this.props;

        return (
            <div style={styles.container}>
                {list.map(this.renderItem)}
            </div>
        );
    }
}


const styles = {
    container: {
        display: "flex",
        flexDirection: "column"
    },
    item: {
        backgroundColor: "whitesmoke",
        marginBottom: 5,
        padding: 15
    }
};

export default List;