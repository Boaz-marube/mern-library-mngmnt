import type { JSX } from "react";
import { LoginForm } from "../../features/authentication/components/LoginForm/LoginForm";
import  { useSelector } from "react-redux";
import {type RootState } from "../../redux/ReduxStore";


export default function HomePage():JSX.Element{
    const displayLogin = useSelector((state:RootState)=> state.modal.displayLogin);
    return(
        <div className="page">
            HomePage
            {displayLogin && <LoginForm />} 
        </div>
    )
}