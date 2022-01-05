import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
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

function App (props) {
    const { todoList, add, remove, toggle, update } = props;

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
        <div style = { styles.container }>
            <Header />
            <Form
                onAddTodo    = { onAddTodo }
            />
            <TodoList
                list         = { todoList }
                onRemoveItem = { onRemoveTodo }
                onToggleItem = { onToggleTodo }
                onUpdateItem = { onUpdateTodo }
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        todoList: state.todoReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ add, remove, toggle, update }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);