import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

import { todoListProps as Props, Todo } from '../../types';
import { List, Item } from '../../../common/styles';


const TodoList = (props: Props) => {
	const [ text, setText ] = useState('');
	const [ todoId, setId ] = useState('');
	const { list, onRemoveItem, onToggleItem, onUpdateItem, onLoadTodos } = props;

	useEffect(() => {
		onLoadTodos();
	}, []);

	const onTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value);
	};

	const editItem = (todo: Todo) => {
		setId(todo._id);
		setText(todo.text);
	};

	const saveItem = () => {
		const todo = {
			id : todoId,
			text
		};
		onUpdateItem(todo);
		setTimeout(() => toastr.success('Todo successfully updated!'), 0);
		setId('');
		setText('');
	};

	const removeItem = (id: string) => (e: FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		onRemoveItem(id);
		setTimeout(() => toastr.success('Todo successfully removed!'), 0);
	};

	const renderItem = (todo: Todo) => {
		if (todoId === todo._id) {
			return (
				<span>
					<input
						type="text"
						value={text}
						onChange={onTextChange}/>
					<button onClick={saveItem}>Edit</button>
				</span>
			);
		}

		return (<span onDoubleClick={() => editItem(todo)}>{todo.text}</span>);
	};

	return (
		<List>
			{ list.map( (todo: Todo) => <Item key={todo._id}
				style={ { textDecoration: todo.toggle ? 'line-through' : 'none'} }>
				{renderItem(todo)}&nbsp;&nbsp;&nbsp;&nbsp;
				<button onClick={() => onToggleItem(todo._id)}>Toggle</button>
				<button onClick={removeItem(todo._id)}>Delete</button>
			</Item>)}
		</List>
	);
};


export default TodoList;
