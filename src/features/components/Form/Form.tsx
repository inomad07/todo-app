import React, { useState } from 'react'
import { formProps as Props } from '../../types'
import { Input } from './style';

const Form = (props: Props) => {
    const [ name, setName ] = useState('');
    const { placeholder, onAddTodo } = props;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key !== 'Enter') return;

        if (!name) return;

        onAddTodo(name);
        setName('');
    };

    return (
        <Input
            type        = { 'text' }
            value       = { name }
            placeholder = { placeholder }
            onChange    = { handleChange }
            onKeyPress  = { handleKeyPress }
        />
    );
};

export default Form;
