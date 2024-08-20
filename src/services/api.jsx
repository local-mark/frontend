import axios from 'axios';
import store from '../store/store'; // Redux 스토어를 가져옵니다.

const api = axios.create({
    baseURL: 'https://umc.localmark.store/',
    headers: {
        'Content-Type': 'application/json',
    },
});

// 요청 인터셉터를 사용하여 매 요청마다 헤더에 토큰을 추가합니다.
api.interceptors.request.use(
    (config) => {
        const state = store.getState(); // 현재 Redux 스토어 상태를 가져옵니다.
        const accessToken = state.user.value.token; // Redux 스토어에서 토큰을 가져옵니다.

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`; // Authorization 헤더에 토큰을 추가합니다.
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// API 요청 함수들
export const fetchData = async (endpoint, params = {}) => {
    try {
        const response = await api.get(endpoint, { params });
        return response.data;
    } catch (error) {
        console.error(`GET 요청 실패: ${endpoint}`, error);
        throw error;
    }
};

// POST 요청 함수
export const postData = async (endpoint, data = {}, config = {}) => {
    try {
        const response = await api.post(endpoint, data, config);
        return response.data;
    } catch (error) {
        console.error(`POST 요청 실패: ${endpoint}`, error);
        throw error;
    }
};

export const updateData = async (endpoint, data = {}) => {
    try {
        const response = await api.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error(`PUT 요청 실패: ${endpoint}`, error);
        throw error;
    }
};

export const deleteData = async (endpoint) => {
    try {
        const response = await api.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error(`DELETE 요청 실패: ${endpoint}`, error);
        throw error;
    }
};
