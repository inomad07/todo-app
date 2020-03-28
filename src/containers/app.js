import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionCreators } from '../redux/actions'

import List from '../components/list'
import Input from '../components/input'
import Title from '../components/title'

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