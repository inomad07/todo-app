import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { load, add, toggle, update, remove } from "../thunks";
import { todoType } from "../../types";

const initialData: todoType[] = [];

const todoSlice = createSlice({
	name: "todos",
	initialState: initialData,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(load.fulfilled, (state, { payload }: PayloadAction<todoType[]>) => {
				return payload || state;
			})
			.addCase(add.fulfilled, (state, { payload }: PayloadAction<todoType>) => {
				return [...state, payload];
			})
			.addCase(toggle.fulfilled, (state, { payload }: PayloadAction<todoType>) => {
				return state.map((todo) => {
					return todo._id === payload._id ? { ...todo, toggle: !todo.toggle } : todo;
				});
			})
			.addCase(update.fulfilled, (state, { payload }: PayloadAction<todoType>) => {
				return state.map((todo) => {
					return todo._id === payload._id ? { ...todo, text: payload.text } : todo;
				});
			})
			.addCase(remove.fulfilled, (state, { payload }: PayloadAction<todoType>) => {
				return state.filter((todo) => todo._id !== payload.id);
			});
	},
});

export default todoSlice.reducer;
