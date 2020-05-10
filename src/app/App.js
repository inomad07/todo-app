import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TodoList from '../features/components/TodoList';
import Input from '../features/components/Input';
import Title from '../common/components/Title';
import Actions from '../features/redux/actions';
import TodoService from "../features/services";
import './app.css';

function App(props) {
    const [list, fetchList] = useState([]);

    useEffect(() => {
        TodoService.getAll()
            .then(res => fetchList(res))
            .catch(err => console.log(err));
    }, []);


    const { add, remove, toggle, update } = props;

    const onAddTodo = (todo) => {
        add(todo)
    };

    const onRemoveTodo = (id) => {
        remove(id)
    };

    const onToggleTodo = (id) => {
        toggle(id)
    };

    const onUpdateTodo = (id, todo) => {
        update(id, todo)
    };

    return (
        <div className="container">
            <Title>
                To-Do List
            </Title>
            <Input
                placeholder     = {'Type a todo, then hit enter!'}
                onSubmitEditing = { onAddTodo }
            />
            <TodoList
                list         = { list }
                onRemoveItem = { onRemoveTodo }
                onToggleItem = { onToggleTodo }
                onUpdateItem = { onUpdateTodo }
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        todoList: state.rootReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);