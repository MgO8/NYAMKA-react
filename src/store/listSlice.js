import { createSlice } from '@reduxjs/toolkit';

const listSlice = createSlice({
    name: 'items',
    initialState: {

    },
    reducers: {
        addItem(state, action) {

        },
    }
});

export const { addItem } = listSlice.actions;

export default listSlice.reducer;