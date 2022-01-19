import { createAsyncThunk } from '@reduxjs/toolkit';

import Axios from 'axios';

export const addUser = createAsyncThunk(
    'addUser',
    async (payload) => {
        const response = await Axios.post("http://localhost:3001/signup", payload)
        return response.data
    }
) 