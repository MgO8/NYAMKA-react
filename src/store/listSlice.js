import { createSlice } from '@reduxjs/toolkit';

import { fetchFoodList, addItem, deleteItem } from './listSlice.middlewares'

const listSlice = createSlice({
    name: 'items',
    initialState: {
        items: []
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFoodList.fulfilled, (state, action) => {
            state.items = action.payload.items
        })
        builder.addCase(addItem.fulfilled, (state, action) => {
            state.items = [...state.items, ...action.payload]
        })
        builder.addCase(deleteItem.fulfilled, (state, action) => {
            state.items = state.items.filter((item) => item.id !== Number(action.payload))
        })
    }
});

export default listSlice.reducer;