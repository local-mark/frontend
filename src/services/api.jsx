import axios from 'axios';

const api = axios.create({
    baseURL: 'https://umc.localmark.store/',
    headers: {
        'Content-Type': 'application/json',
    },
});

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

export const postData = async (endpoint, data = {}) => {
    try {
        const response = await api.post(endpoint, data);
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
