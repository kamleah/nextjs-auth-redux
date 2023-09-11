import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    iscollapse: true,
};

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        collapseSidebar: (state, action) => {
            state.iscollapse = action.payload
        }
    },
});

export const { collapseSidebar } = AuthSlice.actions;

export default AuthSlice.reducer;