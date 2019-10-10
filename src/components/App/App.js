import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../actions/index';
import './app.css';
import TodoList from '../TodoList';
import Input from '../Input';
import Title from '../Title';

class App extends Component {

    onAddTodo = (text) => {
        this.props.add(text)
    };

    onRemoveTodo = (id) => {
        this.props.remove(id)
    };

    onToggleTodo = (id) => {
        this.props.toggle(id)
    };

    onUpdateTodo = (id, text) => {
        this.props.update(id, text)
    };

    render() {
        const todoList = this.props.todoList.todos;
        return (
            <div className="container">
                <Title>
                    To-Do List
                </Title>
                <Input
                    placeholder     = {'Type a todo, then hit enter!'}
                    onSubmitEditing = { this.onAddTodo }
                />
                <TodoList
                    list         = { todoList }
                    onRemoveItem = { this.onRemoveTodo }
                    onToggleItem = { this.onToggleTodo }
                    onUpdateItem = { this.onUpdateTodo }
                />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        todoList: state.rootReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);