import { createContext, useContext, useEffect, useState } from "react";
import { login, signup } from "../api/authApi";
import { AuthContextType, User } from "../types/auth";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);


    const handleLogin = async (email: string, password: string) => {
        try {
            const data = await login(email,password);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            setUser({ email });
        }
        catch(error: any){
            console.error('로그인 실패:', error);
            throw error;
        }
    }

    const handleSignup = async (email: string, password: string) => {

        setLoading(true);
        setError(null);
        try {
            const data = await signup(email, password);
            return data;
        } catch (error) {
            setError('Signup failed');
            throw error;
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setUser(null);
      };
    
      useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
          setToken(storedToken);
          setUser({ email: 'sample@example.com' });
        }
      }, []);


      return (
        <AuthContext.Provider value={{ user, token, handleLogin, handleSignup, handleLogout }}>
          {children}
        </AuthContext.Provider>
      );

};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth는 AuthProvider 내부에서만 사용할 수 있습니다.');
    }
    return context;
  };