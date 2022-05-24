import { applyMiddleware , compose , legacy_createStore } from "redux" 
import rootReducer from "../Reducers/reducer.js"; 
import thunk from "redux-thunk"; 

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(rootReducer,  
    composeEnhancer(applyMiddleware(thunk))
  );

export default store;