import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../actions'


class List extends Component {

    //renderItem = (todo) => {
    //    const { onRemoveItem } = this.props;
    //    console.log(arguments);
    //    return (
    //        <div style={styles.item } >
    //            {todo.text}&nbsp;&nbsp;&nbsp;
    //            <button onClick={() => onRemoveItem(todo.id)}>Delete</button>
    //
    //            <button onClick={() => this.props.onEditItem(todo.id)}>Edit</button>
    //        </div>
    //    );
    // };

    render() {
        let todos = this.props.todos;
        const { onRemoveItem } = this.props;
        const { onSelectItem } = this.props;
        console.log(todos);

        return (
            <div style={styles.container}>
                { todos.map(todo => <div key={todo.id} style={
                { backgroundColor: "whitesmoke", marginBottom: 5, padding: 15,
                textDecoration: todo.done ? 'line-through' : 'none'}} > {todo.text} &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => onRemoveItem(todo.id)}>Delete</button>
                    <button onClick={() => onSelectItem(todo.id)}>Toggle</button>
                </div>)}

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
        padding: 15,

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