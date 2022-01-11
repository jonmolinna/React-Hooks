import { createSlice } from "@reduxjs/toolkit";

export const crudSlice = createSlice({
    name: 'crudSlicer',
    initialState: {
        users: [],
        userEdit: {},
    },
    reducers: {
        setUserList: (state, action) => {
            state.users = action.payload
        },
        deleteUser: (state, action) => {
            let newData = state.users.filter(element => element.id !== action.payload);
            state.users = newData
        },
        editUser: (state, action) => {
            state.userEdit = action.payload;
        },
        updatedUser: (state, action) => {
            let newData = state.users.map(element => element.id === action.payload.id? action.payload : element);
            state.users = newData;
        },
        addUser: (state, action) => {
            state.users = [...state.users, action.payload];
        }
    }
});

export const { setUserList, deleteUser, editUser, updatedUser, addUser } = crudSlice.actions;

export default crudSlice.reducer;