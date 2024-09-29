import React from "react"
import {  useLocation, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";


export default function Header(){ 
     const {token,handleLogout} = useAuth();
     const navigate = useNavigate();

    const onClick = (e:any) => {
        const {className} = e.target;

        if(className.length > 0 && className === 'login__button') {
            navigate("/login" ,
            );
        } else if(className.length > 0 && className === 'logout__button') {
            handleLogout();
        }
    }
    
    return (
        <> 
            <div className="header">
                {!token ? 
                        <div></div>
                    :<input className="logout__button" type="button" onClick={onClick} value="로그아웃"/>} 
            </div>
        </>
    )
}   