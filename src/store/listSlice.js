import { createSlice } from '@reduxjs/toolkit';

import { fetchFoodList, addItem, deleteItem, editFoodItem } from './listSlice.middlewares'

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
        builder.addCase(editFoodItem.fulfilled, (state, action) => {
            const payloadItem = action.payload[0]
            const index = state.items.findIndex((item) => item.id === Number(payloadItem.id))
            console.log(index, payloadItem.id)
            if (index > -1) {
                state.items.splice(index, 1, payloadItem)
            }
        })
    }
});

export default listSlice.reducer;