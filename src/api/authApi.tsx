
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/random-travel';

export const login = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
        return response.data;
    } catch (error: any) {
        console.log(error);
        console.error('Response error:', error.response.data);
    }
};

export const signup = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, { email, password });
        return response.data;
    } catch (error: any) {
        console.log(error);
        console.error('Response error:', error.response.data);
    }

};