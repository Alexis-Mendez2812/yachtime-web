import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./LoginButton.jsx";
import { LoginForm } from "./LoginForm.jsx";
import { Register } from "./Register.jsx";
import { LogoutButton } from "./LogoutButton.jsx";
import { Profile } from "./Profile.jsx";
import "./Profile.css"
import style from "./Login.module.css"

function Login() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
        <div className={style.container}></div>
      <header className={style.header}>

        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <div>
            <div>
            <div>
    <h1>Welcome to Yach Time App</h1>
    <h3>Choose an option to continue</h3>
  </div>
            </div>
          <LoginButton />
          <LoginForm />
          <Register />
          </div>
        )}
      </header>
      </>

  );
}

export default Login;