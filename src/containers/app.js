import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {actionCreators} from '../actions'

import List from '../components/list'
import Input from '../components/input'
import Title from '../components/title'


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    }
};


class App extends Component {

    onAddTodo = (text) => {
        this.props.add(text)
    };

    onRemoveTodo = (index) => {
        this.props.remove(index)
    };

    onSelectTodo = (index) => {
        this.props.select(index)
    };

    onEditTodo = (index) => {
        this.props.edit(index)
    };

    render() {
        const {todos} = this.props.todos;

        return (
            <div style={styles.container}>
                <Title>
                    To-Do List
                </Title>
                <Input
                    placeholder={'Type a todo, then hit enter!'}
                    onSubmitEditing={ this.onAddTodo }
                />
                <List
                    list={todos}
                    onRemoveItem={ this.onRemoveTodo }
                    onSelectItem={ this.onSelectTodo }
                    onEditItem={ this.onEditTodo }
                />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);