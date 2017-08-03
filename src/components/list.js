import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators} from '../actions';
//import axios from 'axios'

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    };

    onTextChange = (event) => {
        let textChange = this.setState({ text: event.target.value });
        console.log('onTextChange: ', textChange);
    };

    editItem = (todo) => {
        let editTodo = this.setState({editableToDoId: todo._id, text: todo.text});
        console.log('editItem: ', editTodo);
    };

    saveItem = () => {
        let newTodo = this.props.save(this.state.editableToDoId, this.state.text);
        this.setState({ editableToDoId: '', text: '' });
        console.log('saveItm: ', newTodo);
        debugger;
    };

    renderItem = (todo) => {
        let isToDoEditable = this.state.editableToDoId;
        if (isToDoEditable  === todo._id)
            return (
                <span>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.onTextChange}/>
                    <button
                        onClick={this.saveItem}>Save
                    </button>
                </span>
            );

        return (<span onDoubleClick={() => this.editItem(todo)}>{todo.text}</span>)
    };

    render() {
        const todoList = this.props.list;
        const { onRemoveItem } = this.props;
        const { onSelectItem } = this.props;
        return (
            <div className="todo-list">
                { todoList.map(todo => <div className="todo" key={todo._id}
                                         style={ { textDecoration: todo.done ? 'line-through' : 'none'} }>

                    {this.renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => onSelectItem(todo._id)}>Toggle</button>
                    <button onClick={() => onRemoveItem(todo._id)}>Delete</button>

                </div>)}

            </div>
        );
    }

}


function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(List);