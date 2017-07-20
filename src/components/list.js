import React, { Component } from "react";

class List extends Component {

    changeColor = () => this.setState(prev => ({ color: prev.color === '#0095ff' ? '' : '#0095ff' }));

    renderItem = (text, i) => {
        const onRemoveItem = this.props.onClickItem;
        const { onSelectItem } = this.props;
        const { onEditItem } = this.props;

        return (
            <div  style={styles.item }  >
                {text}&nbsp;&nbsp;&nbsp;
                <button onClick={() => this.props.todos.onClickItem(i)}>Delete</button>

                <button onClick={() => this.props.onEditItem(i)}>Edit</button>
            </div>
        );
     };


    changeColor = () => this.setState(prev => ({ color: prev.color === '#0095ff' ? '' : '#0095ff' }));

    render() {
        const { list } = this.props;
        console.log(list);

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