import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const nameSlice = createSlice({
		name: 'username',
    initialState: '',
    reducers: {
        newname : (state, action) => {
         return action.payload
        }
    }
})

export const { newname } = nameSlice.actions;

export default nameSlice.reducer;