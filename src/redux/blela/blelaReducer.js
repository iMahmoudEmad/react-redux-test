import { BUY_BLELA } from "./blelaTypes"

const initialState = {
    numOfBlela: 10
}

const blelaReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_BLELA: return {
            ...state,
            numOfBlela: state.numOfBlela - 1
        }
    
        default: return state
    }
}

export default blelaReducer;