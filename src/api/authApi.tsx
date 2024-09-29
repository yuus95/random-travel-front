
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/random-travel';

export interface LoginResponse {
    token: string;
  }

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    console.log("login")
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
            },
            body:JSON.stringify({email,password})
        });

        if(!response.ok) {
            throw new Error('로그인실패');
        }

        const token = await response.text();
        return {token};
    } catch (error: any) {
        console.log(error);
        throw new Error('로그인실패');
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