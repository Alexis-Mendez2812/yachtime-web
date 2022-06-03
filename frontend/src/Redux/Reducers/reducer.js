import { 
  ALL_YATES ,
  POST_USER,
  GET_USERS,
  GET_ALL_PRODUCTS,
  DELETE_YATE,
  FILT_BY_STATS,
  FILT_BY_ROLE,
  VACIAR,
  GET_ID_NAME,
  AUTHORIZE,
DESAUTHORIZE,
BANNED
} from "../Actions/actions"
const initialState = {
    allYates: [],
    copyYates: [],
    myYates:[],
    favoritesYates:[],
    yateSelected:{},
    userSession:{},
    users:[],
    copyUsers:[]
}

export default function rootReducer (state = initialState, { type, payload }) {
  switch (type) {

  case ALL_YATES:
    return { ...state, allYates: payload,copyYates: payload }

  case POST_USER:
    return { ...state, userSession: payload }
  case GET_ALL_PRODUCTS:
    return { ...state, allYates: payload,copyYates: payload}
  case AUTHORIZE:
    return { ...state, Users: payload,copyUsers: payload}
  case DESAUTHORIZE:
    return { ...state, Users: payload,copyUsers: payload}
  case BANNED:
    return { ...state, Users: payload,copyUsers: payload}
  case GET_USERS:
      return {
        ...state,
        users: payload,
        copyUsers: payload,
      }
      case DELETE_YATE:
      let deletedYate = state.allYates.filter((c) => c.id !== type.payload.id);
      return {
        ...state,
        allYates: [...deletedYate],
      }
      case FILT_BY_STATS:
     console.log('EN EL REDUCER FILTER ADMIN, ', payload)
      const backUp2 = [...state.users];
      const filtered2 = backUp2.filter((user)=>  new Date(user.createdAt).getMonth()+1 === Number(payload))
      break;
      case FILT_BY_ROLE:
      const backUp = [...state.users];
      const filtered = backUp.filter(
        (user) => Number(user.plan_id) === payload
      );
      return {
        ...state,
        copyUsers: filtered,
      }
      case VACIAR:
        return {
            ...state,
            yateSelected:{}
        }
      case GET_ID_NAME:
        return {
            ...state,
            yateSelected:payload
        }
  default:
    return state
  }
}
