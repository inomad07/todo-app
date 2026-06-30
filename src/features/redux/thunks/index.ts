import { createAsyncThunk } from "@reduxjs/toolkit";
import TodoService from "../../services";
import { todoType } from "../../types";

export const load = createAsyncThunk<todoType[], void>(
	"todos/load",
	async () => {
		const response = await TodoService.getAll();
		return response.todo;
	}
);

export const add = createAsyncThunk<todoType, string>(
	"todos/add",
	async (todo) => {
		const response = await TodoService.add(todo);
		return response.todo;
	}
);

export const toggle = createAsyncThunk<todoType, string>(
	"todos/toggle",
	async (id) => {
		const response = await TodoService.toggle(id);
		return response.todo;
	}
);

export const update = createAsyncThunk<todoType, { id: string; text: string }>(
	"todos/update",
	async ({ id, text }) => {
		const response = await TodoService.update(id, text);
		return response.todo;
	}
);

export const remove = createAsyncThunk<{ id: string }, string>(
	"todos/remove",
	async (id) => {
		await TodoService.remove(id);
		return { id };
	}
);
