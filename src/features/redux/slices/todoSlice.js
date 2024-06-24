import { createSlice } from '@reduxjs/toolkit';
import { load, add, toggle, update, remove } from '../thunks';

const initialData = [];

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialData,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(load.fulfilled, (state, { payload }) => {
                return payload || state;
            })
            .addCase(add.fulfilled, (state, { payload }) => {
                return [
                    ...state, 
                    state = payload 
                ]
            })
            .addCase(toggle.fulfilled, (state, { payload }) => {
                return state.map((todo) => {
                    return todo._id === payload._id ? { ...todo, toggle: !todo.toggle } : todo;
                });
            })
            .addCase(update.fulfilled, (state, { payload }) => {
                return state.map((todo) => {
                    return todo._id === payload._id ? { ...todo, text: payload.text } : todo;
                });
            })
            .addCase(remove.fulfilled, (state, { payload }) => {
                return state.filter((todo) => todo._id !== payload.id);
            });
    }
});

export default todoSlice.reducer;
