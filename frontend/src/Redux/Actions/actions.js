import axios from "axios"
export const ALL_YATES = "ALL_YATES"

export const allYates = ()=> { 
    return async function(dispatch){ 
    let res = await axios.get("http://localhost:3001/allYatees")
    let payload = await res.data    
    dispatch({ type: ALL_YATES, payload })
    }
}