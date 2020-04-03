import {combineReducers} from 'redux';
import cakeReducer from './cake/cakeReducer';
import iceCreamReducer from './iceCream/iceCreamReducer';
import blelaReducer from './blela/blelaReducer';

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    blela: blelaReducer
})

export default rootReducer;