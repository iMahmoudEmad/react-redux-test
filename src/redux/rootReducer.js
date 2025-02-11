import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import blelaReducer from './blela/blelaReducer';
import userReducer from './user/UserReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    blela: blelaReducer,
    user: userReducer
})

export default rootReducer;