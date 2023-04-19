import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = axios.get(USERS_URL);
    return (await response).data;
  } catch (error) {
    return error.message;
  }
});
const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    addUser: {
      reducer(state, payload) {},
      prepare() {
        return {
          payload: {},
        };
      },
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // console.log(state.user);
      return action.payload;
    });
  },
});

//this state.users come from configureStore
export const selectAllUsers = (state) => state.users;
export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === Number(userId));
export default usersSlice.reducer;
