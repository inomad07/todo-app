import React, { Component } from "react";

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }
    };

    onTextChange = (event) => {
        this.setState({ text: event.target.value });
    };

    editItem = (todo) => {
        this.setState({editableToDoId: todo._id, text: todo.text});
    };

    saveItem = () => {
        const { onSaveItem } = this.props;
        onSaveItem(this.state.editableToDoId, this.state.text);
        this.setState({ editableToDoId: '', text: '' });
    };

    renderItem = (todo) => {
        let isToDoEditable = this.state.editableToDoId;
        if (isToDoEditable  === todo._id)
            return (
                <span>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.onTextChange}/>
                    <button
                        onClick={this.saveItem}>Save
                    </button>
                </span>
            );

        return (<span onDoubleClick={() => this.editItem(todo)}>{todo.text}</span>)
    };

    render() {
        const { list } = this.props;
        const { onRemoveItem } = this.props;
        const { onToggleItem } = this.props;

        return (
            <div className="todo-list">
                { list.map(todo => <div className="todo" key={todo._id}
                                         style={ { textDecoration: todo.toggle ? 'line-through' : 'none'} }>
                    {this.renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={() => onToggleItem(todo._id)}>Toggle</button>
                    <button onClick={() => onRemoveItem(todo._id)}>Delete</button>
                </div>)}

            </div>
        );
    }

}


export default List;