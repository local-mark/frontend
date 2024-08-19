import { createSlice } from '@reduxjs/toolkit';
import base64 from 'base-64';

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
            const { accessToken } = action.payload.result;
            state.value.token = accessToken;
            state.isLogin = true;
            localStorage.setItem('accessToken', accessToken);

            const payload = accessToken.substring(accessToken.indexOf('.') + 1, accessToken.lastIndexOf('.'));
            const decodingInfo = base64.decode(payload);
            const decodingInfoJson = JSON.parse(decodingInfo);
            console.log(decodingInfoJson);
        },
    },
});

export const { loginData, loginAction } = userSlice.actions;
export default userSlice.reducer;
