//import { combineReducers } from "redux";
import {GET_SALES} from '../actions/Listing.jsx'

const initialState = {}



function rootReducer (state=initialState, action){
    switch(action.type){
      case GET_SALES:
        return {...state, sales: action.payload}
      default:
          return {...state}
    }
}

export default rootReducer;