import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { add, remove, save, select } from '../actions'
import axios from 'axios'
import List from '../components/list'
import Input from '../components/input'
import Title from '../components/title'
//import { getTodos } from '../helpers/todos';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    }
};


class App extends Component {
    //
    //constructor(props) {
    //    super(props);
    //
    //    this.state = {
    //       todoList: []
    //    }
    //}
    //
    //componentDidMount() {
    //    axios.get('http://localhost:3001/api/tasks/all')
    //        .then((todos) => {
    //            this.setState({
    //                todoList: todos.data
    //            });
    //        });
    //}


    onAddTodo = (text) => {
        this.props.add(text)
    };

    onRemoveTodo = (index) => {
        this.props.remove(index)
    };

    onSelectTodo = (index) => {
        this.props.select(index)
    };

    render() {
        const { todos } = this.props.todos;

        //const todoList = this.state.todoList;
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
                    list         = {todos}
                    onRemoveItem = { this.onRemoveTodo }
                    onSelectItem = { this.onSelectTodo }
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
    return bindActionCreators(add, remove, save, select, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App);