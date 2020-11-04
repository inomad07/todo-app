import React, { Component } from "react";
import PropTypes from 'prop-types';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const styles = {
    input: {
        fontSize: "100%",
        padding: 15,
        borderWidth: 0
    }
};


export default class Form extends Component {
    state = {
        value: ""
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        const { onAddTodo } = this.props;
        const { value } = this.state;

        if (!value) {
            setTimeout(() => toastr.error("Cannot create todo!"), 0);
            return;
        }

        onAddTodo(value);
        setTimeout(() => toastr.success("Todo successfully created!"), 0);
        this.setState({ value: "" });
    };

    render() {
        const { placeholder } = this.props;
        const { value } = this.state;

        return (
            <input
                style       = { styles.input }
                type        = { "text" }
                value       = { value }
                placeholder = { placeholder }
                onChange    = { this.handleChange }
                onKeyPress  = { this.handleKeyPress }
            />
        );
    }
}

Form.propTypes = {
    placeholder: PropTypes.string,
    onAddTodo: PropTypes.func
};