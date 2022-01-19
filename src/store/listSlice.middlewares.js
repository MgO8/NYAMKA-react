import { createAsyncThunk } from '@reduxjs/toolkit';

import Axios from 'axios';

export const fetchFoodList = createAsyncThunk(
    'fetchFoodList',
    async () => {
        const response = await Axios.get("http://localhost:3001/list")
        return response.data
    }
)

export const addItem = createAsyncThunk(
    'addItem',
    async (payload) => {
        const response = await Axios.post("http://localhost:3001/create", payload)
        return response.data
    }
)

export const deleteItem = createAsyncThunk(
    'deleteItem',
    async (id, payload) => {
        const response = await Axios.delete(`http://localhost:3001/delete/${id}`, payload)
        return response.data
    }
)

export const editFoodItem = createAsyncThunk(
    'editFoodItem',
    async (payload) => {
        const response = await Axios.post(`http://localhost:3001/update/${payload.id}`, payload)
        return response.data
    }
)
