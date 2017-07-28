import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../actions';
import axios from 'axios'

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: '',
            todoList: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/tasks/all')
            .then((todos) => {
                this.setState({
                    todoList: todos.data
                });
            });
    }

    onTextChange = (event) => {
        this.setState({text: event.target.value});
        console.log('onTextChange: ', this.setState({text: event.target.value}))
    };

    editItem = (todo) => {
        this.setState({editableToDoId: todo.id, text: todo.text});
        console.log('editItem: ', this.setState({editableToDoId: todo.id, text: todo.text}))
    };

    saveItem = () => {
        let newItem = this.props.save(this.state.editableToDoId, this.state.text);
        this.setState({editableToDoId: '', text: ''});
        console.log('saveItm: ', newItem)
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
        let todos = this.props.todos;
        const todoList = this.state.todoList;
        const { onRemoveItem } = this.props;
        const { onSelectItem } = this.props;
        console.log(todos);
        return (
            <div className="todo-list">
                { todoList.map(todo => <div className="todo" key={todo._id}
                                         style={ { textDecoration: todo.done ? 'line-through' : 'none'} }>

                    {this.renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;

                    <button onClick={() => onSelectItem(todo._id)}>Select</button>
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