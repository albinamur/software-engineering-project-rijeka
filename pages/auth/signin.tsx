import { NextPage } from "next";
import { useState } from "react";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
    const [userInfo, setUserInfo] = useState({email: '', password: ""});
    const handleSubmit = () => {

    }
    
    return (
        <div className="sign-in-form">
         <form onSubmit={handleSubmit}>
         <h1>Login</h1>
        
                <input type="email" placeholder="john@email.com" />
                <input type="password" placeholder="****" />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default SignIn;