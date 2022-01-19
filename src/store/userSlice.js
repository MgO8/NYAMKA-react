import { createSlice } from '@reduxjs/toolkit';

import { addUser } from './userSlice.middlewares'

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: []
    },
    extraReducers: (builder) => {
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.users = [...state.users, ...action.payload]
        })
    }
});

export default userSlice.reducer;