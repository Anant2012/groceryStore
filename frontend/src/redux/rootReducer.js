import { combineReducers } from "redux";
import shopReducer from './shopping/shopping-reducer';
import userReducer from './User/userreducer'
// import ProductReducer from './shopping/productReducer'

const rootReducer=combineReducers({
    food: shopReducer,
    user:userReducer,
});

export default rootReducer;