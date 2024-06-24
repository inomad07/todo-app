import { createAsyncThunk } from '@reduxjs/toolkit';
import TodoService from '../../services';

export const load = createAsyncThunk(
    'todos/load',
    async () => {
        const response = await TodoService.getAll();
        return response.todo;
    }
);

export const add = createAsyncThunk(
    'todos/add',
    async (todo) => {
        const response = await TodoService.add(todo);
        return response.todo;
    }
);

export const toggle = createAsyncThunk(
    'todos/toggle',
    async (id) => {
        const response = await TodoService.toggle(id);
        return response.todo;
    }
);

export const update = createAsyncThunk(
    'todos/update',
    async ({id, text}) => {
        const response = await TodoService.update(id, text);
        return response.todo;
    }
);

export const remove = createAsyncThunk(
    'todos/remove',
    async (id) => {
        await TodoService.remove(id);
        return { id };
    }
);
