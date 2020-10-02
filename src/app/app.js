import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, remove, toggle, update } from '../features/redux/actions'

import TodoList from '../features/components/TodoList'
import Form from '../features/components/Form'
import Header from '../common/components/Header'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    }
};

function App () {
    const todoList = useSelector(state => state.rootReducer);
    const dispatch = useDispatch();

    const onAddTodo = (todo) => {
        dispatch(add(todo))
    };

    const onRemoveTodo = (id) => {
        dispatch(remove(id))
    };

    const onToggleTodo = (id) => {
        dispatch(toggle(id))
    };

    const onUpdateItem = (id, todo) => {
        dispatch(update(id, todo))
    };

    return (
        <div style = { styles.container }>
            <Header>
                To-Do List
            </Header>
            <Form
                placeholder  = {'Type a todo, then hit enter!'}
                onAddTodo    = { onAddTodo }
            />
            <TodoList
                list         = { todoList }
                onRemoveItem = { onRemoveTodo }
                onToggleItem = { onToggleTodo }
                onUpdateItem = { onUpdateItem}
            />
        </div>
    )
}


export default App;