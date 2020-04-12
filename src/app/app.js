import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { add, remove, toggle, update } from '../features/redux/actions'

import List from '../features/components/List'
import Input from '../features/components/Input'
import Title from '../common/components/Title'

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

    const onUpdateItem = (id, todo) => {
        update(id, todo)
    };

    return (
        <div style = { styles.container }>
            <Title>
                To-Do List
            </Title>
            <Input
                placeholder  = {'Type a todo, then hit enter!'}
                onAddTodo    = { onAddTodo }
            />
            <List
                list         = { todoList }
                onRemoveItem = { onRemoveTodo }
                onToggleItem = { onToggleTodo }
                onUpdateItem = { onUpdateItem}
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        todoList: state
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ add, remove, toggle, update }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);