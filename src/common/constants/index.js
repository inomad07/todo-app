export const TITLE = 'Todo App';
export const PLACEHOLDER = 'Type a todo, then hit enter!';

export const TODO_SUCCESSFULLY_CREATED = 'Todo successfully created!';
export const TODO_SUCCESSFULLY_UPDATED = 'Todo successfully updated!';
export const TODO_SUCCESSFULLY_REMOVED = 'Todo successfully removed!';
export const CANNOT_CREATE_TODO = 'Cannot create todo!';
export const TODO_SUCCESSFULLY_TOGGLED ='Todo successfully toggled!';
export const TODO_SUCCESSFULLY_UNTOGGLED = 'Todo successfully untoggled!';

export const EDIT = 'Edit';
export const DELETE = 'Delete';
export const TOGGLE = 'Toggle';

// Initial state of the store
export const initialState = [
    {
        id: 1,
        text: 'Hello World!',
        done: false
    },
    {
        id: 2,
        text: 'Hola Mundo!',
        done: false
    },
    {
        id: 3,
        text: 'Привет Мир!',
        done: true
    },
];
