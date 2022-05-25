import axios from "axios"
export const ALL_YATES = "ALL_YATES"
export const POST_USER = "POST_USER"

export  function  allYates(){ 
    return async function(dispatch){ 
    let res = await axios.get("/products/all")
    let payload = await res.data    
   return dispatch({ type: ALL_YATES, payload })
    }
}

export  function  postUserGoogle(user){ 
    console.log("user action")
    console.log(user)
    return async function(dispatch){ 
    let usuario= await axios.post("/users",user);
   return dispatch({ type: POST_USER, payload:usuario.data })
    }
}