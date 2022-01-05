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

type todoType = {
    _id: string,
    text: string,
    toggle?: false
    id?: string
}

type actionType = {
    type: string;
    payload: todoType
}

type stateType = {
    rootReducer: Function
}

export type {
    appProps,
    formProps,
    actionType,
    todoListProps,
    todoType,
    stateType,
}