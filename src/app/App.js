import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';

import TodoList from '../features/components/TodoList';
import Form from '../features/components/Form';
import Header from '../common/components/Header';
import Actions from '../features/redux/actions';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;


function App (props) {
    const { add, toggle, update, remove, todoList } = props;

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
        <>
            <GlobalStyle />
            <Container>
                <Header
                    title        = {'To-Do List'}
                />
                <Form
                    placeholder  = {'Type a todo, then hit enter!'}
                    onAddTodo    = { onAddTodo }
                />
                <TodoList
                    list         = { todoList }
                    onRemoveItem = { onRemoveTodo }
                    onToggleItem = { onToggleTodo }
                    onUpdateItem = { onUpdateTodo }
                />
            </Container>
        </>
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