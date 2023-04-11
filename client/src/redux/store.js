import { createStore,applyMiddleware } from "redux";
import rootReduser from "./rootReduser";
import {composeWithDevTools}from 'redux-devtools-extension'
import thunk from 'redux-thunk'  

const middlewares =[thunk]



const store =createStore(rootReduser ,composeWithDevTools(applyMiddleware(...middlewares)));



export default store