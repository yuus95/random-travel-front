import AuthForm from "../components/AuthForm";
import Header from "../components/Header";


export default function LoginPage() {
    return (
        <> 
            <Header/>
            <AuthForm isLoginForm={true}/>
        </>
    )
}