import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  token: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      console.log(state.token)
    },
    clearToken(state) {
      state.token = null
      console.log(state.token)
    },
    viewToken(state) {
      console.log(state.token)
    }
  },
})

export const { setToken, clearToken, viewToken } = authSlice.actions

export default authSlice.reducer
