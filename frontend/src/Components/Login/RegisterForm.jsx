import React, { useState } from 'react';
import toast from 'react-hot-toast';
import './LoginForm.css';
import './RegisterForm.css';
import Google from './assets/google.png';
import { useAuth0 } from '@auth0/auth0-react';
import {
   GoogleText,
   GoogleBox,
   TFBox,
   GoogleImg,
   FormBox3,
   TextInput2,
   Container2,
   TextInput,
   FormBox2,
   LogButton,
} from './styledComponents';

export function validate(input) {
   let errors = {};
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

export const RegisterForm = () => {
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
      <Container2>
         <GoogleBox onClick={loginWithRedirect}>
            <GoogleImg src={Google} alt='' />
            <GoogleText> CONTINUE WITH GOOGLE</GoogleText>
         </GoogleBox>

         <FormBox2>
            <TFBox>
               <TextInput placeholder='First Name' variant='standard' />
               <TextInput placeholder='Last Name' variant='standard' />
            </TFBox>
            <TFBox>
               <TextInput placeholder='Email' variant='standard' />
               <TextInput
                  placeholder='Username'
                  variant='standard'
                  onChange={handleInputChange}
                  value={input.username}
                  name='username'
               />
            </TFBox>
            <TFBox>
               <TextInput
                  placeholder='Password'
                  variant='standard'
                  onChange={handleInputChange}
                  value={input.password}
                  name='password'
               />
               <TextInput placeholder='Confirm Password' variant='standard' />
            </TFBox>
            <LogButton onClick={handleSumbit}>Register</LogButton>
         </FormBox2>
         <FormBox3>
            <TextInput2 placeholder='First Name' variant='standard' />
            <TextInput2 placeholder='Last Name' variant='standard' />
            <TextInput2 placeholder='Email' variant='standard' />
            <TextInput2
               onChange={handleInputChange}
               value={input.username}
               name='username'
               placeholder='Username'
               variant='standard'
            />
            <TextInput2
               onChange={handleInputChange}
               value={input.password}
               name='password'
               placeholder='Password'
               variant='standard'
            />
            <TextInput2 placeholder='Confirm Password' variant='standard' />
            <LogButton onClick={handleSumbit}>Register</LogButton>
         </FormBox3>
      </Container2>
   );
};
