import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoList from '../features/components/TodoList';
import Form from '../features/components/Form';
import Header from '../common/components/Header';
import { add, loadTodos, remove, toggle, update } from '../features/redux/actions';
import { State, Todo } from '../features/types';
import { GlobalStyle, Container } from '../common/styles';


function App() {
	const todoList = useSelector((state: State) => state.rootReducer);
	const dispatch = useDispatch();

	const onAddTodo = (todo: Todo) => {
		dispatch(add(todo));
	};

	const onRemoveTodo = (id: Todo) => {
		dispatch(remove(id));
	};

	const onToggleTodo = (id: Todo) => {
		dispatch(toggle(id));
	};

	const onUpdateTodo = (todo: Todo) => {
		dispatch(update(todo));
	};

	const onLoadTodos = () => {
		dispatch(loadTodos());
	};

	return (
		<>
			<GlobalStyle />
			<Container>
				<Header />
				<Form
					onAddTodo    = { onAddTodo }
				/>
				<TodoList
					list         = { todoList }
					onRemoveItem = { onRemoveTodo }
					onToggleItem = { onToggleTodo }
					onUpdateItem = { onUpdateTodo }
					onLoadTodos  = { onLoadTodos }
				/>
			</Container>
		</>
	);
}


export default App;