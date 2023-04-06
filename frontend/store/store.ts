import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import authReducer from './reducers/authSlice'
import usernameReducer from './reducers/userSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      user: usernameReducer,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
