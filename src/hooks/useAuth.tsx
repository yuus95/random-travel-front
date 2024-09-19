import { useState } from "react";
import { login, signup } from "../api/authApi";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleLogin = async (email: string, password: string) => {
        setLoading(true);
        setError(null);
        try {
            const data = await login(email, password);
            console.log("useAuth::login!!",data)
            
            return data;
        } catch (error) {
            setError('Login failed');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleSignup = async (email: string, password: string) => {
        console.log("useAuth!!")
        setLoading(true);
        setError(null);
        try {
            console.log("handleSignup", email, password)
            const data = await signup(email, password);
            console.log("signup Data!! ", data)
            return data;
        } catch (error) {
            setError('Signup failed');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return { handleLogin, handleSignup, loading, error };
};