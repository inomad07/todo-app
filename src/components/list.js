import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../actions'
class List extends Component {

    changeColor = () => this.setState(prev => ({color: prev.color === '#0095ff' ? '' : '#0095ff'}));

    renderItem = (todo) => {
        const { onRemoveItem } = this.props;
        console.log(arguments);
        return (
            <div style={styles.item } >
                {todo.text}&nbsp;&nbsp;&nbsp;
                <button onClick={() => onRemoveItem(todo.id)}>Delete</button>

                <button onClick={() => this.props.onEditItem(todo.id)}>Edit</button>
            </div>
        );
     };


    changeColor = () => this.setState(prev => ({color: prev.color === '#0095ff' ? '' : '#0095ff'}));

    render() {
        console.log(this.props.todos);
        return (
            <div style={styles.container}>
                {this.props.todos.map(this.renderItem)}
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

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(List);