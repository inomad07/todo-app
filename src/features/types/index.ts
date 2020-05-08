export type appProps = {
    add: Function,
    toggle: Function,
    update: Function,
    remove: Function,
    getAll: Function,
    todoList: []
};

export type headerProps = {
    title: string
}

export type formProps = {
    placeholder: string,
    onAddTodo: Function
}

export type todoListProps = {
    list:         any,
    onRemoveItem: Function,
    onToggleItem: Function,
    onUpdateItem: Function,
    onLoadTodos:  Function
}

export type todoType = {
    _id: string,
    text: string,
    toggle?: false
    id?: string
}

export type actionType = {
    type: string;
    payload: todoType
}

export type stateType = {
    rootReducer: Function
}
