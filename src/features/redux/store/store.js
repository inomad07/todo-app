import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../slices'

// Automatically adds the thunk middleware and the Redux DevTools extension
export const Store = configureStore({
  // Automatically calls `combineReducers`
    reducer: {
        rootReducer: todoReducer
    }
})
