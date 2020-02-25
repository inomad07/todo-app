import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/actions/index';
import './app.css';
import TodoList from '../TodoList';
import Input from '../Input';
import Title from '../Title';

const App = (props) => {
    const onAddTodo = (todo) => {
        props.add(todo)
    };

    const onRemoveTodo = (id) => {
        props.remove(id)
    };

    const onToggleTodo = (id) => {
        props.toggle(id)
    };

    const onUpdateTodo = (id, todo) => {
        props.update(id, todo)
    };

    const { todoList } = props;

    return (
        <div className="container">
            <Title
                title           = {'To-Do List'}
            />
            <Input
                placeholder     = {'Type a todo, then hit enter!'}
                onSubmitEditing = { onAddTodo }
            />
            <TodoList
                list         = { todoList }
                onRemoveItem = { onRemoveTodo }
                onToggleItem = { onToggleTodo }
                onUpdateItem = { onUpdateTodo }
            />
        </div>
    )
};


function mapStateToProps(state) {
    return {
        todoList: state.rootReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);