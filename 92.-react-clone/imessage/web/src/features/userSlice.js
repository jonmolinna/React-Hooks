import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      uid : "dsjnJNjlnn123KMKM",
      photo: "https://avatars.githubusercontent.com/u/54208914?v=4",
      email: "jmolina2624@gmail.com",
      displayName: "Dallas",
    }
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;