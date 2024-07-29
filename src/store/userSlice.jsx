import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false,
    value: {
        token: '',
    },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            const { token } = action.payload.result;
            state.value.token = token;
            state.isLogin = true;
            localStorage.setItem('accessToken', token);
        },
    },
});

export const { loginData, loginAction } = userSlice.actions;
export default userSlice.reducer;
