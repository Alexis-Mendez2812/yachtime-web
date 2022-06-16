import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import './LoginForm.css';
import { createNewUser } from '../../Redux/Actions/FormActions/formAction';
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

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export function validate(input) {
   let errors = {};
   if (!input.username) {
      errors.username = 'Username is required';
   }
   if (!input.password) {
      errors.password = 'Password is required';
   }
   if (input.password !== input.password2) {
      errors.password2 = 'Passwords are not the same.';
   }
   if (input.password.length < 8) {
      errors.password3 = 'Password must have at least 8 chars.';
   }
   if (!input.firstName) {
      errors.firstName = 'First name is required';
   }
   if (!input.lastName) {
      errors.lastName = 'Last name is required';
   }
   if (!input.email) {
      errors.email = 'Last name is required';
   }
   return errors;
}

export const RegisterForm = () => {
   const navigate = useNavigate();
   const { loginWithRedirect } = useAuth0();
   const [input, setInput] = useState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      password2: '',
   });
   const [errors, setErrors] = useState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      password2: '',
      password3: '',
   });
   const [errorAlert, setErrorAlert] = useState(false);
   const [successAlert, setSuccessAlert] = useState(false);

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
      e.preventDefault();
      try {
         let aux = [];
         for (let prop in errors) {
            if (prop) {
               aux.push(1);
            }
         }
         if (aux.length === 0) {
            createNewUser(input).then((res) => {
               if (!res) {
                  setErrorAlert(true);
                  setTimeout(() => {
                     setErrorAlert(false);
                  }, 3000);
               } else {
                  setSuccessAlert(true);
                  setTimeout(() => {
                     setSuccessAlert(false);
                     window.location.reload();
                  }, 3000);
               }
            });
         } else {
            setErrorAlert(true);
            setTimeout(() => {
               setErrorAlert(false);
            }, 3000);
         }
      } catch (err) {
         setErrorAlert(true);
         setTimeout(() => {
            setErrorAlert(false);
         }, 3000);
      }
   };
   return (
      <Container2>
         <Snackbar open={errorAlert} autoHideDuration={6000}>
            <Alert severity='error' sx={{ width: '100%' }}>
               Something went wrong. Try again!
            </Alert>
         </Snackbar>
         <Snackbar open={successAlert} autoHideDuration={6000}>
            <Alert severity='success' sx={{ width: '100%' }}>
               Account created successfully!.
            </Alert>
         </Snackbar>

         <GoogleBox onClick={loginWithRedirect}>
            <GoogleImg src={Google} alt='' />
            <GoogleText> CONTINUE WITH GOOGLE</GoogleText>
         </GoogleBox>

         <FormBox2>
            <TFBox>
               <Box>
                  <TextInput
                     placeholder='First Name'
                     onChange={handleInputChange}
                     name='firstName'
                     style={{
                        width: '15rem',
                        color: 'white',
                        borderTopLeftRadius: '0.5rem',
                        borderTopRightRadius: '0.5rem',
                        backgroundColor: 'rgb(0, 0, 0, 72%)',
                     }}
                     InputProps={{
                        inputProps: { style: { color: 'white' } },
                     }}
                     variant='filled'
                  />
                  {errors.firstName && (
                     <h4
                        style={{
                           color: 'red',
                           fontSize: '1rem',
                           position: 'absolute',
                        }}
                     >
                        {errors.firstName}
                     </h4>
                  )}
               </Box>
               <Box>
                  <TextInput
                     placeholder='Last Name'
                     onChange={handleInputChange}
                     style={{
                        width: '15rem',
                        color: 'white',
                        borderTopLeftRadius: '0.5rem',
                        borderTopRightRadius: '0.5rem',
                        backgroundColor: 'rgb(0, 0, 0, 72%)',
                     }}
                     InputProps={{
                        inputProps: { style: { color: 'white' } },
                     }}
                     variant='filled'
                     name='lastName'
                  />
                  {errors.lastName && (
                     <h4
                        style={{
                           color: 'red',
                           fontSize: '1rem',
                           position: 'absolute',
                        }}
                     >
                        {errors.astName}
                     </h4>
                  )}
               </Box>
            </TFBox>
            <TFBox>
               <Box>
                  <TextInput
                     placeholder='Email'
                     style={{
                        width: '15rem',
                        color: 'white',
                        borderTopLeftRadius: '0.5rem',
                        borderTopRightRadius: '0.5rem',
                        backgroundColor: 'rgb(0, 0, 0, 72%)',
                     }}
                     InputProps={{
                        inputProps: { style: { color: 'white' } },
                     }}
                     variant='filled'
                     onChange={handleInputChange}
                     name='email'
                  />
                  {errors.email && (
                     <h4
                        style={{
                           color: 'red',
                           fontSize: '1rem',
                           position: 'absolute',
                        }}
                     >
                        {errors.email}
                     </h4>
                  )}
               </Box>
               <Box>
                  <TextInput
                     placeholder='Username'
                     style={{
                        width: '15rem',
                        color: 'white',
                        borderTopLeftRadius: '0.5rem',
                        borderTopRightRadius: '0.5rem',
                        backgroundColor: 'rgb(0, 0, 0, 72%)',
                     }}
                     InputProps={{
                        inputProps: { style: { color: 'white' } },
                     }}
                     variant='filled'
                     onChange={handleInputChange}
                     value={input.username}
                     name='username'
                  />
                  {errors.username && (
                     <h4
                        style={{
                           color: 'red',
                           fontSize: '1rem',
                           position: 'absolute',
                        }}
                     >
                        {errors.username}
                     </h4>
                  )}
               </Box>
            </TFBox>
            <TFBox>
               <Box>
                  <TextInput
                     placeholder='Password'
                     style={{
                        width: '15rem',
                        color: 'white',
                        borderTopLeftRadius: '0.5rem',
                        borderTopRightRadius: '0.5rem',
                        backgroundColor: 'rgb(0, 0, 0, 72%)',
                     }}
                     InputProps={{
                        inputProps: { style: { color: 'white' } },
                     }}
                     variant='filled'
                     type='password'
                     onChange={handleInputChange}
                     value={input.password}
                     name='password'
                  />
                  {errors.password ? (
                     <h4
                        style={{
                           color: 'red',
                           fontSize: '1rem',
                           position: 'absolute',
                        }}
                     >
                        {errors.password}
                     </h4>
                  ) : errors.password2 ? (
                     <h4
                        style={{
                           color: 'red',
                           fontSize: '1rem',
                           position: 'absolute',
                        }}
                     >
                        {errors.password2}
                     </h4>
                  ) : (
                     errors.password3 && (
                        <h4
                           style={{
                              color: 'red',
                              fontSize: '1rem',
                              position: 'absolute',
                           }}
                        >
                           {errors.password3}
                        </h4>
                     )
                  )}
               </Box>
               <TextInput
                  placeholder='Confirm Password'
                  style={{
                     width: '15rem',
                     color: 'white',
                     borderTopLeftRadius: '0.5rem',
                     borderTopRightRadius: '0.5rem',
                     backgroundColor: 'rgb(0, 0, 0, 72%)',
                  }}
                  InputProps={{ inputProps: { style: { color: 'white' } } }}
                  type='password'
                  onChange={handleInputChange}
                  name='password2'
                  variant='filled'
               />
            </TFBox>
            <LogButton onClick={handleSumbit}>Register</LogButton>
         </FormBox2>
         <FormBox3>
            <Box>
               <TextInput2
                  placeholder='First Name'
                  style={{
                     width: '15rem',
                     color: 'white',
                     borderTopLeftRadius: '0.5rem',
                     borderTopRightRadius: '0.5rem',
                     backgroundColor: 'rgb(0, 0, 0, 72%)',
                  }}
                  InputProps={{ inputProps: { style: { color: 'white' } } }}
                  variant='filled'
                  onChange={handleInputChange}
                  name='firstName'
               />
               {errors.firstName && (
                  <h4
                     style={{
                        color: 'red',
                        fontSize: '1rem',
                        position: 'absolute',
                     }}
                  >
                     {errors.firstName}
                  </h4>
               )}
            </Box>
            <Box>
               <TextInput2
                  placeholder='Last Name'
                  style={{
                     width: '15rem',
                     color: 'white',
                     borderTopLeftRadius: '0.5rem',
                     borderTopRightRadius: '0.5rem',
                     backgroundColor: 'rgb(0, 0, 0, 72%)',
                  }}
                  InputProps={{ inputProps: { style: { color: 'white' } } }}
                  variant='filled'
                  onChange={handleInputChange}
                  name='lastName'
               />
               {errors.lastName && (
                  <h4
                     style={{
                        color: 'red',
                        fontSize: '1rem',
                        position: 'absolute',
                     }}
                  >
                     {errors.lastName}
                  </h4>
               )}
            </Box>
            <Box>
               <TextInput2
                  placeholder='Email'
                  style={{
                     width: '15rem',
                     color: 'white',
                     borderTopLeftRadius: '0.5rem',
                     borderTopRightRadius: '0.5rem',
                     backgroundColor: 'rgb(0, 0, 0, 72%)',
                  }}
                  InputProps={{ inputProps: { style: { color: 'white' } } }}
                  variant='filled'
                  onChange={handleInputChange}
                  name='email'
               />
               {errors.email && (
                  <h4
                     style={{
                        color: 'red',
                        fontSize: '1rem',
                        position: 'absolute',
                     }}
                  >
                     {errors.email}
                  </h4>
               )}
            </Box>
            <Box>
               <TextInput2
                  onChange={handleInputChange}
                  value={input.username}
                  name='username'
                  placeholder='Username'
                  style={{
                     width: '15rem',
                     color: 'white',
                     borderTopLeftRadius: '0.5rem',
                     borderTopRightRadius: '0.5rem',
                     backgroundColor: 'rgb(0, 0, 0, 72%)',
                  }}
                  InputProps={{ inputProps: { style: { color: 'white' } } }}
                  variant='filled'
               />
               {errors.username && (
                  <h4
                     style={{
                        color: 'red',
                        fontSize: '1rem',
                        position: 'absolute',
                     }}
                  >
                     {errors.username}
                  </h4>
               )}
            </Box>
            <Box>
               <TextInput2
                  onChange={handleInputChange}
                  value={input.password}
                  name='password'
                  type='password'
                  placeholder='Password'
                  style={{
                     width: '15rem',
                     color: 'white',
                     borderTopLeftRadius: '0.5rem',
                     borderTopRightRadius: '0.5rem',
                     backgroundColor: 'rgb(0, 0, 0, 72%)',
                  }}
                  InputProps={{ inputProps: { style: { color: 'white' } } }}
                  variant='filled'
               />
               {errors.password ? (
                  <h4
                     style={{
                        color: 'red',
                        fontSize: '1rem',
                        position: 'absolute',
                     }}
                  >
                     {errors.password}
                  </h4>
               ) : errors.password2 ? (
                  <h4
                     style={{
                        color: 'red',
                        fontSize: '1rem',
                        position: 'absolute',
                     }}
                  >
                     {errors.password2}
                  </h4>
               ) : (
                  errors.password3 && (
                     <h4
                        style={{
                           color: 'red',
                           fontSize: '1rem',
                           position: 'absolute',
                        }}
                     >
                        {errors.password3}
                     </h4>
                  )
               )}
            </Box>
            <TextInput2
               placeholder='Confirm Password'
               type='password'
               style={{
                  width: '15rem',
                  color: 'white',
                  borderTopLeftRadius: '0.5rem',
                  borderTopRightRadius: '0.5rem',
                  backgroundColor: 'rgb(0, 0, 0, 72%)',
               }}
               InputProps={{ inputProps: { style: { color: 'white' } } }}
               onChange={handleInputChange}
               name='password2'
               variant='filled'
            />
            <LogButton onClick={handleSumbit}>Register</LogButton>
         </FormBox3>
      </Container2>
   );
};
