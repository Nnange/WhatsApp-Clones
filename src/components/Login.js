import React from 'react';
import "../CSS/Login.css";
const Login = () => {
    return (
        <div className="login">
            <h1> Google Auth Login</h1>
            <div className="login__container">
                <img src="https://lh3.googleusercontent.com/qYEXlhwYdCseeGq1WlXApSluO_LcHJ2dSxvqmAXckY_8IXE2JPBfHpKq_7laiQeYJPGH7g=s85" alt=""/>
                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button type="submit" onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
