import { 
  ALL_YATES ,
  POST_USER

} from "../Actions/actions"
const initialState = {
    allYates: [],
    myYates:[],
    favoritesYates:[],
    userSession:{},

}

export default function rootReducer (state = initialState, { type, payload }) {
  switch (type) {

  case ALL_YATES:
    return { ...state, allYates: payload }
  case POST_USER:
    return { ...state, userSession: payload }

  default:
    return state
  }
}
