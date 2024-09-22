import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function LoginForm({ isLoginForm = false }: { isLoginForm?: boolean }) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const navigate = useNavigate();
    const {handleLogin, handleSignup} = useAuth();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        try {
            if (isLoginForm) {
                console.log("onSumbit::login")
                await handleLogin(email, password);

                navigate('/home' ,{
                    state: {isLoginForm: true}
                } ); // 로그인 후 홈으로 이동
            } else {
                if (password !== passwordConfirm) {
                    alert('비밀번호가 일치하지 않습니다.');
                    return;
                }

                await handleSignup(email, password);
                console.log("AuthForm 3!! ");

                navigate('/login'); // 회원가입 후 로그인 페이지로 이동
            }
        } catch (err) {
            console.error(err);
        }
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value }
        } = e;

        if (name === "email") {
            setEmail(value);
        }

        if (name === "password") {
            setPassword(value);
        }

        if (name === "password_confirm") {
            setPasswordConfirm(value);
        }
    }

    return (
            <form onSubmit={onSubmit} className="form">
                <div className="signUpForm__email">
                    <label htmlFor="SignUpForm__email__input">이메일 </label>
                    <input 
                    type="email" 
                    name="email" 
                    id="SignUpForm__email__input"
                    onChange={onChange} />
                </div>
                <div className="signUpForm__password">
                    <label htmlFor="signUpForm__password__input">비밀번호 </label>
                    <input type="password"
                        name="password"
                        id="signUpForm__password__input"
                        onChange={onChange} />
                </div>
                {isLoginForm ?

                    <p> 계정이 없다면 <Link to="/signup">회원가입하기</Link> </p>
                    :
                    <div className="signUpForm__password__confirm">
                        <label htmlFor="signUpForm__password__confirm__input">비밀번호 확인</label>
                        <input 
                          type="password"
                          name="password_confirm"
                          id="signUpForm__password__confirm__input"
                          onChange={onChange} />
                    </div>
                }

                <input type="submit" value={isLoginForm ? "로그인" : "회원가입 하기"} className="signup__button" />
            </form>
    )

}