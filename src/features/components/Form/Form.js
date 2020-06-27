import React, { useState } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";


const Input = styled.input`
    font-size: 100%;
    padding: 15px;
    border-width: 0;
`;

const Form = (props) => {
    const [ name, setName ] = useState('');
    const { placeholder, onAddTodo } = props;

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!name) return;

        onAddTodo(name);
        setName('');
    };

    return (
        <Input
            type        = { "text" }
            value       = { name }
            placeholder = { placeholder }
            onChange    = { handleChange }
            onKeyPress  = { handleKeyPress }
        />
    );
};

Form.propTypes = {
    placeholder: PropTypes.string,
    onAddTodo: PropTypes.func
};

export default Form;
