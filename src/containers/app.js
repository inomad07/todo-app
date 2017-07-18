import React, { Component } from 'react'

import { actionCreators } from '../reducers/todoListRedux'
import List from '../components/list'
import Input from '../components/input'
import Title from '../components/title'

class App extends Component {

    state = {};

    componentWillMount() {
        const {store} = this.props;

        const {todos} = store.getState();
        this.setState({todos});

        this.unsubscribe = store.subscribe(() => {
            const {todos} = store.getState();
            this.setState({todos})
        })
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    onAddTodo = (text) => {
        const {store} = this.props;

        store.dispatch(actionCreators.add(text))
    };

    onRemoveTodo = (index) => {
        const {store} = this.props;

        store.dispatch(actionCreators.remove(index))
    };

    onSelectTodo = (index) => {
        const {store} = this.props;
        store.dispatch(actionCreators.select(index))
    };

    onEditTodo = (index) => {
        const {store} = this.props;
        store.dispatch(actionCreators.edit(index))
    };

    render() {
        const {todos} = this.state;

        return (
            <div style={styles.container}>
                <Title>
                    To-Do List
                </Title>
                <Input
                    placeholder={'Type a todo, then hit enter!'}
                    onSubmitEditing={this.onAddTodo}
                />
                <List
                    list={todos}
                    onClickItem={this.onRemoveTodo}
                    onSelectItem={this.onSelectTodo}
                    onEditItem={this.onEditTodo}
                />
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
    }
};


export default App;