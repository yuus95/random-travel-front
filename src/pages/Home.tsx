import LoginForm from "../components/AuthForm";
import Header from "../components/Header";
import MoveButton from "../components/MoveButton";
import { useAuth } from "../hooks/useAuth"

export default function HomePage() {

    const {token} = useAuth();
    return (
        <> 
            < Header/>
            Hello Worlds!!
            {token ?
            "로그인 유저"
             : 
            <LoginForm isLoginForm/>
            }
            <MoveButton name="랜덤 여행 결과 목록"  path={"/random-travel"} />
        </>
    )
}