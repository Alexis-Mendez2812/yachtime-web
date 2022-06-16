import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postUserGoogle } from '../../Redux/Actions/actions';
import './LoginForm.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { Box, Snackbar, TextField } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { loginUser } from '../../Redux/Actions/FormActions/formAction';
import Google from './assets/google.png';
import {
   GoogleText,
   Form,
   GoogleBox,
   FormBox,
   GoogleImg,
   LogButton,
} from './styledComponents';

const Alert = React.forwardRef(function Alert(props, ref) {
   return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export const LoginForm = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { loginWithRedirect } = useAuth0();
   const [input, setInput] = useState({
      email: '',
      password: '',
   });

   const [errorAlert, setErrorAlert] = useState(false);
   const [successAlert, setSuccessAlert] = useState(false);

   const handleInputChange = function (e) {
      setInput({
         ...input,
         [e.target.name]: e.target.value,
      });
   };

   const handleSumbit = async (e) => {
      e.preventDefault();
      try {
         loginUser(input).then((res) => {
            if (res) {
               setSuccessAlert(true);
               setTimeout(() => {
                  setSuccessAlert(false);
                  dispatch(postUserGoogle());
                  navigate('/');
               }, 3000);
            } else {
               setErrorAlert(true);
               setTimeout(() => {
                  setErrorAlert(false);
               }, 3000);
            }
         });
      } catch (e) {
         setErrorAlert(true);
         setTimeout(() => {
            setErrorAlert(false);
         }, 3000);
      }
   };

   return (
      <Form>
         <Snackbar open={errorAlert} autoHideDuration={6000}>
            <Alert severity='error' sx={{ width: '100%' }}>
               Credentials are not valid!
            </Alert>
         </Snackbar>
         <Snackbar open={successAlert} autoHideDuration={6000}>
            <Alert severity='success' sx={{ width: '100%' }}>
               Login completed.
            </Alert>
         </Snackbar>

         <GoogleBox onClick={loginWithRedirect}>
            <GoogleImg src={Google} alt='' />
            <GoogleText> CONTINUE WITH GOOGLE</GoogleText>
         </GoogleBox>
         <FormBox>
            <TextField
               autoComplete='off'
               onChange={handleInputChange}
               value={input.email}
               style={{
                  width: '100%',
                  color: 'white',
                  borderTopLeftRadius: '0.5rem',
                  borderTopRightRadius: '0.5rem',
                  backgroundColor: 'rgb(0, 0, 0, 72%)',
               }}
               InputProps={{ inputProps: { style: { color: 'white' } } }}
               placeholder='Email'
               name='email'
               variant='filled'
            />
            <TextField
               autoComplete='off'
               onChange={handleInputChange}
               value={input.password}
               type='password'
               name='password'
               placeholder='Password'
               style={{
                  width: '100%',
                  color: 'white',
                  borderTopLeftRadius: '0.5rem',
                  borderTopRightRadius: '0.5rem',
                  backgroundColor: 'rgb(0, 0, 0, 72%)',
               }}
               InputProps={{ inputProps: { style: { color: 'white' } } }}
               variant='filled'
            />
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
