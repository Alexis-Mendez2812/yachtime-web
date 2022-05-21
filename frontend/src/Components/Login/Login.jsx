import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./LoginButton.jsx";
import { LogoutButton } from "./LogoutButton.jsx";
import { Profile } from "./Profile.jsx";
import "./Profile.css"


function Login() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="Login">
      <header className="Login-header">

        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default Login;