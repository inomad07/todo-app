import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

import { formProps as Props } from '../../types';
import { Input } from '../../../common/styles';


const placeholder = 'Type a todo, then hit enter!';

const Form = (props: Props) => {
	const [ text, setText ] = useState('');
	const { onAddTodo } = props;
	console.log(onAddTodo);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== 'Enter') return;

		if (!text) {
			setTimeout(() => toastr.error('Cannot create todo!'), 0);
			return;
		}

		const todo = {
			text,
			toggle: false,
		};
		onAddTodo(todo);
		setTimeout(() => toastr.success('Todo successfully created!'), 0);
		setText('');
	};

	return (
		<Input
			type        = { 'text' }
			value       = { text }
			placeholder = { placeholder }
			onChange    = { handleChange }
			onKeyPress  = { handleKeyPress }
		/>
	);
};

export default Form;
