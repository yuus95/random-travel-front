import LoginForm from "../components/AuthForm";
import Header from "../components/Header";
import { useAuth } from "../hooks/useAuth"

export default function HomePage() {

    const {token} = useAuth();
    return (
        <> 
            < Header/>
            Hello Worlds!!
            {token ? "로그인 유저" : 
            <LoginForm isLoginForm = {true}/>
            }
        </>
    )
}