import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogin: false,
    value: {
        accessToken: '',
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

            // Base64 디코딩 후, UTF-8로 변환
            const decodingInfo = JSON.parse(decodeURIComponent(escape(atob(payload))));
            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('nickname', decodingInfo.nickname);
            localStorage.setItem('id', decodingInfo.id);
            localStorage.setItem('is_brand_registered', decodingInfo.is_brand_registered);
            localStorage.setItem('type', decodingInfo.type);
            console.log(decodingInfo.type);
        },
        logoutAction: (state) => {
            Object.assign(state, initialState);
            localStorage.clear();
        },
    },
});

export const { loginData, loginAction, logoutAction } = userSlice.actions;
export default userSlice.reducer;
