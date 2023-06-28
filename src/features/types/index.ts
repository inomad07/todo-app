type appProps = {
    add: Function,
    toggle: Function,
    update: Function,
    remove: Function,
    getAll: Function,
    todoList: []
}

type formProps = {
    onAddTodo: Function
}

type todoListProps = {
    list:         any,
    onRemoveItem: Function,
    onToggleItem: Function,
    onUpdateItem: Function,
    onLoadTodos:  Function
}

type Todo = {
    _id: string,
    text: string,
    toggle?: false
    id?: string
}

type Action = {
    type: string;
    payload: Todo
}

type State = {
    rootReducer: Function
}

export type {
	appProps,
	formProps,
	todoListProps,
	Action,
	Todo,
	State,
};