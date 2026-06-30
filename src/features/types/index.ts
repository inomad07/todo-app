export type appProps = {
	add: (todo: string) => void;
	toggle: (todo: todoType) => void;
	update: (todo: todoType) => void;
	remove: (todo: todoType) => void;
	getAll: () => void;
	todoList: todoType[];
};

export type headerProps = {
	title: string;
};

export type formProps = {
	placeholder: string;
	onAddTodo: (text: string) => void;
};

export type todoListProps = {
	list: todoType[];
	onRemoveItem: (id: string) => void;
	onToggleItem: (id: string) => void;
	onUpdateItem: (id: string, text: string) => void;
	onLoadTodos: () => void;
};

export type todoType = {
	_id: string;
	text: string;
	toggle?: boolean;
	id?: string;
};
