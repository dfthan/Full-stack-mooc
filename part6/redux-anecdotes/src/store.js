import anecdoteReducer from "./reducers/anecdoteReducer"
import { configureStore } from "@reduxjs/toolkit"
import notificationReducer from "./reducers/notificationReducer"

export const store = configureStore({
    reducer: {
        anecdotes: anecdoteReducer,
        notifications: notificationReducer
    }
})

