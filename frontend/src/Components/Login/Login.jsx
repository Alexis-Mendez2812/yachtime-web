import React, { useState } from 'react';
import './Profile.css';
import style from './Login.module.css';
import { LoginForm } from './LoginForm.jsx';
import { RegisterForm } from './RegisterForm.jsx';
import { Link } from 'react-router-dom';
import { Container } from './styledComponents';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
   const [login, setLogin] = useState(false);
   const { loginWithRedirect } = useAuth0();
   const handleLogIn = () => {
      setLogin(!login);
   };
   return (
      <Container>
         <div className={style.LoginLeft}>
            <div className={style.goBackLogin}>
               <Link to='/'>
                  <i className='fa-solid fa-arrow-right-to-bracket'></i> Go back
               </Link>
            </div>
            <div className={style.copy}>
               <h1 style={{ fontSize: '1.7rem' }}>Already have an account?</h1>
               <p>
                  This will be the best experience you will have. What are you
                  waiting for?
               </p>
               <button className={style.btn} onClick={loginWithRedirect}>
                  Log In
                  {/* {login ? 'Sing Up' : 'Log In'} */}
               </button>
            </div>
         </div>

         <div className={style.LoginRight}>
            <RegisterForm />
            {/* {login ? <LoginForm /> : <RegisterForm />} */}
         </div>
      </Container>
   );
}

export default Login;
