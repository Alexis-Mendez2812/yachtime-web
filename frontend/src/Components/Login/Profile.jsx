import React from "react";

import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
// import { useDispatch } from "react-redux";

export const Profile = () => {

  // const dispatch = useDispatch();

   const userSession = useSelector((state) => state.userSession)
  
 
    // useEffect(() => {
    //   if(user.email){
    //     dispatch(getFavoritesCharacters(user.email))
    //   }
    // }, [user]);



  return (
    userSession.email?(
      <div className="Profile-Card">
        <img src={userSession.picture} alt={userSession.name} />
        <h2> Name:</h2>
        <h2>{userSession.nickname}</h2>
        <h4>Name:</h4>
        <h4>{userSession.name}</h4>
        <p>Email: {userSession.email}</p>

      </div>
    ):(
      <Loading/>
    )
  );
};
