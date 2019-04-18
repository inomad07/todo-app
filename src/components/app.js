import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actionCreators } from '../actions'
import List from './list'
import Input from './input'
import Title from './title'

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    }
};

class App extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }

    onAddTodo = (text) => {
        this.props.add(text)
    };

    onRemoveTodo = (id) => {
        this.props.remove(id)
    };

    onToggleTodo = (id) => {
        this.props.toggle(id)
    };

    onUpdateTodo = (id, text) => {
        this.props.update(id, text)
    };

    render() {
        const todoList =  this.props.todoList.todos;
        return (
            <div style = { styles.container }>
                <Title>
                    To-Do List
                </Title>
                <Input
                    placeholder     = {'Type a todo, then hit enter!'}
                    onSubmitEditing = { this.onAddTodo }
                />
                <List
                    list         = { todoList }
                    onRemoveItem = { this.onRemoveTodo }
                    onToggleItem = { this.onToggleTodo }
                    onUpdateItem   = { this.onUpdateTodo }
                />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        todoList: state.mainReducer
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);