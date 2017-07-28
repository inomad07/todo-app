import React, { Component } from "react";


class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3001/api/tasks/all')
            .then((todos) => {
                this.setState({
                    todos: todos.data
                });
            });
    }


}