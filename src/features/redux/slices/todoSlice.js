import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../../../common/constants';
import { generateId } from '../utils';


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add(state, { payload }) {
            return [
                ...state, 
                {
                    id: generateId(state),
                    text: payload.text,
                    done: false,
                }
            ]
        },
        toggle(state, { payload }) {
            return state.map(todo => todo.id === payload.id ? {...todo, done: !todo.done} : todo);
        },
        update(state, { payload }) {
            return state.map(todo =>todo.id === payload.id ? { ...todo, text: payload.text } : todo);
        },
        remove(state, { payload }) {
            return state.filter(todo => todo.id !== payload.id)
        }
    }
});


// `createSlice` automatically generated action creators with these names.
// export them as named exports from this "slice" file
export const { add, remove, toggle, update  } = todoSlice.actions

// Export the slice reducer as the default export
export default todoSlice.reducer;
