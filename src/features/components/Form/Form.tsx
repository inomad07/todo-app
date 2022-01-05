import React, { useState } from "react";
import styled from "styled-components";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

import { formProps as Props } from "../../types";

const Input = styled.input`
    font-size: 100%;
    padding: 15px;
    border-width: 0;
`;

const placeholder = 'Type a todo, then hit enter!'

const Form = (props: Props) => {
    const [ text, setText ] = useState('');
    const { onAddTodo } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== "Enter") return;

        if (!text) {
            setTimeout(() => toastr.error("Cannot create todo!"), 0);
            return;
        }

        const todo = {
            text,
            toggle: false,
        };
        onAddTodo(todo);
        setTimeout(() => toastr.success("Todo successfully created!"), 0);
        setText('');
    };

    return (
        <Input
            type        = { "text" }
            value       = { text }
            placeholder = { placeholder }
            onChange    = { handleChange }
            onKeyPress  = { handleKeyPress }
        />
    );
};

export default Form;
