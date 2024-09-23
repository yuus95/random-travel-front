export interface User {
    email: string;
  }
  
export interface AuthContextType {
    user: User |null;
    token: string | null;
    handleLogin: (email:string, password:string) => void;
    handleSignup: (email:string, password:string) => void;
    handleLogout: () => void;
  }