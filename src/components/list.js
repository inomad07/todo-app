import React, { Component } from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionCreators} from '../actions'


class List extends Component {

    changeColor = () => this.setState(prev => ({color: prev.color === '#0095ff' ? '' : '#0095ff'}));

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


    changeColor = () => this.setState(prev => ({color: prev.color === '#0095ff' ? '' : '#0095ff'}));

    render() {
        let todos = this.props.todos;
        const { onRemoveItem } = this.props;
        console.log(todos);

        return (
            <div style={styles.container}>

                {todos.map(todo => <div key={todo.id} style={styles.item }>
                   {todo.text} &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => onRemoveItem(todo.id)}>Delete</button>
                    <button>Toggle</button>
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