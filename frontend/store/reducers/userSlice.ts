import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  username: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername(state, action) {
      state.username = action.payload
      console.log(state.username)
    },
    clearUsername(state) {
      state.username = null
      console.log(state.username)
    },
  },
})

export const { setUsername, clearUsername } = userSlice.actions

export default userSlice.reducer
