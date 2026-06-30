import { useAppDispatch, useAppSelector } from "../features/hooks";
import type { RootState } from "../features/redux/store";
import TodoList from "../features/components/TodoList";
import Form from "../features/components/Form";
import Header from "../common/components/Header";
import { add, load, remove, toggle, update } from "../features/redux/thunks";
import { TITLE, PLACEHOLDER } from "../common/constants";
import { GlobalStyle, Container } from "./style";

export default function App() {
	const todoList = useAppSelector((state: RootState) => state.rootReducer);
	const dispatch = useAppDispatch();

	const onAddTodo = (todo: string) => {
		dispatch(add(todo));
	};

	const onRemoveTodo = (id: string) => {
		dispatch(remove(id));
	};

	const onToggleTodo = (id: string) => {
		dispatch(toggle(id));
	};

	const onUpdateTodo = (id: string, text: string) => {
		dispatch(update({ id, text }));
	};

	const onLoadTodos = () => {
		dispatch(load());
	};

	return (
		<>
			<GlobalStyle />
			<Container>
				<Header title={TITLE} />
				<Form onAddTodo={onAddTodo} placeholder={PLACEHOLDER} />
				<TodoList
					list={todoList}
					onRemoveItem={onRemoveTodo}
					onToggleItem={onToggleTodo}
					onUpdateItem={onUpdateTodo}
					onLoadTodos={onLoadTodos}
				/>
			</Container>
		</>
	);
}
