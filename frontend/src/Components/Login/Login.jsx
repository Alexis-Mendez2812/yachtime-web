import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./LoginButton.jsx";

import "./Profile.css"
import style from "./Login.module.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postUserGoogle } from '../../Redux/Actions/actions.js';

function Login() {
  const dispatch = useDispatch();
  const { user } = useAuth0();

  useEffect(() => {
   
    if(user?.email){ return dispatch(postUserGoogle(user))
    }
  }, [dispatch,user]);

  return (
    <>
        <div className={style.container}></div>
      <header className={style.header}>

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
      </header>
      </>

  );
}

export default Login;