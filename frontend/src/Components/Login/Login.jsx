import React from 'react'

import { LoginButton } from "./LoginButton.jsx";

import "./Profile.css"
import style from "./Login.module.css"
import { Link } from 'react-router-dom';

function Login() {



  return (
    <>
        <div className={style.container}></div>
      <div className={style.header}>

        {(
          <div>
            <div>
            <div>
    <h1>Welcome to Yach Time App</h1>
    <h3>Choose an option to continue</h3>
  </div>
            </div>
          <LoginButton />
            <Link to={"/LoginForm"} ><button>CONTINUE WITH YACH COUNT</button></Link>
            <Link to={"/RegisterForm"} ><button> REGISTER WITH YACH COUNT</button></Link>
            <Link to={"/"} ><button>BACK TO HOME</button></Link>
          </div>
        )}
      </div>
      </>

  );
}

export default Login;