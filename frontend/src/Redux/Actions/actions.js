import axios from "axios"


export const ALL_YATES = "ALL_YATES"
export const POST_USER = "POST_USER"
export const GET_USERS = "GET_USERS"
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS"
export const DELETE_YATE = "DELETE_YATE"
export const FILT_BY_STATS = "FILT_BY_STATS"
export const FILT_BY_ROLE = "FILT_BY_ROLE"




export  function  allYates(){ 
    return async function(dispatch){ 
    let res = await axios.get("/products/all")
    let payload = await res.data    
   return dispatch({ type: ALL_YATES, payload })
    }
}

export  function  postUserGoogle(user){ 
    return async function(dispatch){ 
    let usuario= await axios.post("/users",user);
   return dispatch({ type: POST_USER, payload:usuario.data })
    }
}

export function getAllUsers (){    
    return async function(dispatch) {
        try {
            const users = await axios('/users/all');
            console.log(users.data)
            return dispatch ({
                type: GET_USERS,
                payload: users.data
            })
    }
    catch(error){
        console.log(error)
    }
}
}

//PRODUCTS

export function getAllProducts() {          //para trerce todos los comics
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`/products/all`)
            return dispatch({
                type: GET_ALL_PRODUCTS,
                payload: data
            })
        }
        catch (err) {
            alert("error get comics(se rompio)", err)
        }
    }
}

export const deleteYate = (id) => {
    console.log(id)
    return async (dispatch) => {
        try {
            const comicDelete= await axios.delete(`/products/delete/${id}`);
            
            return dispatch({
                type: "DELETE_YATE",
                payload: comicDelete.data.remove,
            })
        }
        catch (error) {
            console.log(error);
        }
    }
};

export const filterByStats = (payload) =>{
    return{
        type: FILT_BY_STATS,
        payload: payload
    }
}

export const filterByRole = (plan) =>{
    return{
        type: FILT_BY_ROLE,
        payload: Number(plan)
    }
}