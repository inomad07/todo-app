import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/index';
import './app.css';
import TodoList from '../TodoList';
import Input from '../Input';
import Title from '../Title';

class App extends Component {

    onAddTodo = (todo) => {
        this.props.add(todo)
    };

    onRemoveTodo = (id) => {
        this.props.remove(id)
    };

    onToggleTodo = (id) => {
        this.props.toggle(id)
    };

    onUpdateTodo = (id, todo) => {
        this.props.update(id, todo)
    };

    render() {
        const { todoList } = this.props;
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