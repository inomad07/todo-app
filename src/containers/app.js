import React, { Component } from 'react'
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


class App extends Component {

    onAddTodo = (text) => {
        this.props.add(text)
    };

    onRemoveTodo = (index) => {
        this.props.remove(index)
    };

    onToggleTodo = (index) => {
        this.props.toggle(index)
    };

    render() {
        const { todos } = this.props;

        return (
            <div style = { styles.container }>
                <Title>
                    To-Do List
                </Title>
                <Input
                    placeholder = {'Type a todo, then hit enter!'}
                    onSubmitEditing = { this.onAddTodo }
                />
                <List
                    list={todos}
                    onRemoveItem = { this.onRemoveTodo }
                    onToggleItem = { this.onToggleTodo }
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