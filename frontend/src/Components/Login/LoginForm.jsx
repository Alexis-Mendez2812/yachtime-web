import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import './LoginForm.css';
import { useAuth0 } from '@auth0/auth0-react';
import { TextField } from '@mui/material';
import Google from './assets/google.png';
import {
   GoogleText,
   Form,
   GoogleBox,
   FormBox,
   GoogleImg,
   LogButton,
} from './styledComponents';

export function validate(input) {
   let errors = {};
   console.log(errors);

   if (!input.username) {
      errors.username = 'Username is required';
   } else if (!/\S+@\S+\.\S+/.test(input.username)) {
      errors.username = 'Username is invalid';
   }
   if (!input.password) {
      errors.password = 'Password is required';
   } else if (!/(?=.-*[0-9])/.test(input.password)) {
      errors.password = 'Password is invalid';
   }
   return errors;
}

export const LoginForm = () => {
   const { loginWithRedirect } = useAuth0();
   const [input, setInput] = useState({
      username: '',
      password: '',
   });
   const [errors, setErrors] = useState({});

   const handleInputChange = function (e) {
      setInput({
         ...input,
         [e.target.name]: e.target.value,
      });
      setErrors(
         validate({
            ...input,
            [e.target.name]: e.target.value,
         })
      );
   };
   const handleSumbit = async (e) => {
      try {
         e.preventDefault();
         if (Object.keys(errors).length > 0) {
            toast.error('Debes completar correctamente los campos.');
         }
      } catch (e) {
         console.log(e);
         toast.error('Contraseña o usuario incorrecto.');
      }
   };

   return (
      <Form>
         <GoogleBox onClick={loginWithRedirect}>
            <GoogleImg src={Google} alt='' />
            <GoogleText> CONTINUE WITH GOOGLE</GoogleText>
         </GoogleBox>
         <FormBox>
            <TextField
               autoComplete='off'
               onChange={handleInputChange}
               value={input.username}
               style={{ width: '100%' }}
               placeholder='Email'
               name='username'
               variant='standard'
            />
            {errors.username && (
               <p style={{ color: 'red' }} className='error'>
                  {errors.username}
               </p>
            )}
            <TextField
               autoComplete='off'
               onChange={handleInputChange}
               value={input.password}
               type='password'
               name='password'
               placeholder='Password'
               style={{ width: '100%' }}
               variant='standard'
            />
            {errors.password && (
               <p style={{ color: 'red' }} className='error'>
                  {errors.password}
               </p>
            )}
            <LogButton onClick={handleSumbit}>Log In</LogButton>

            <Link
               style={{ color: 'white', cursor: 'pointer' }}
               to={'/PasswordReset'}
            >
               Forgot your password?
            </Link>
         </FormBox>
      </Form>
   );
};
