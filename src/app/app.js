import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionCreators } from '../features/redux/actions'

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
    const { todoList, add, remove, toggle } = props;

    const onAddTodo = (text) => {
        add(text)
    };

    const onRemoveTodo = (index) => {
        remove(index)
    };

    const onToggleTodo = (index) => {
        toggle(index)
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
            />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        todoList: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);