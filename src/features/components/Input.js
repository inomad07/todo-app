import React, { useState } from "react";
import PropTypes from 'prop-types';

const styles = {
    input: {
        fontSize: "100%",
        padding: 15,
        borderWidth: 0
    }
};

const Input = (props) => {
    const [ value, setValue ] = useState('');
    const { placeholder, onAddTodo } = props;

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!value) return;

        onAddTodo(value);
        setValue('');
    };

    return (
        <input
            style       = { styles.input }
            type        = { "text" }
            value       = { value }
            placeholder = { placeholder }
            onChange    = { handleChange }
            onKeyPress  = { handleKeyPress }
        />
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    onAddTodo: PropTypes.func
};

export default Input;