import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import {postUserGoogle} from "../../Redux/Actions/actions.js"

export const LoginButton = () => {
  const dispatch = useDispatch();
  const { loginWithRedirect ,user } = useAuth0();

  const loginWithGoogle = async function(){ 
    await loginWithRedirect();
    
    }
    useEffect(() => {
   
      if(user?.email){ return dispatch(postUserGoogle(user))
      }
    }, [dispatch,user]);

  return(<>
  <div className="" >
  <button onClick={loginWithGoogle}>
    <img src="https://www.yachtlife.com/static/media/google_icon.795cf39d.svg" alt="google" ></img>  
      CONTINUE WITH GOOGLE</button>
  </div>
  </> 
  );
};