import React, { useState } from 'react';
import './Profile.css';
import style from './Login.module.css';
import { LoginForm } from './LoginForm.jsx';
import { RegisterForm } from './RegisterForm.jsx';
import { Link } from 'react-router-dom';
import { Container } from './styledComponents';

function Login() {
   const [login, setLogin] = useState(true);
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
               <h1>Are you new here?</h1>
               <p>
                  This will be the best experience you will have. What are you
                  waiting for?
               </p>
               <button className={style.btn} onClick={handleLogIn}>
                  {login ? 'Sing Up' : 'Log In'}
               </button>
            </div>
         </div>

         <div className={style.LoginRight}>
            {login ? <LoginForm /> : <RegisterForm />}
         </div>
      </Container>
   );
}

export default Login;
