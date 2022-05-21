import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
// import rootReducer from "../Reducers/reducers";
import combine from '../Reducers/index'
// import { configureStore } from '@reduxjs/toolkit'


export const store = createStore(
    combine,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);  