import {
    FETCH_GLUCOSE_LIST,
    FETCH_CURRENT_GLUCOSE,
    SHOW_SET_GLUCOSE_MODAL,
    HIDE_SET_GLUCOSE_MODAL   
} from '../types/glucoseTypes'

const initialState = {
    glucoseList: {},
    currentGlucose: {},
    setGlucoseModalIsOpened: false
}

export const glucoseReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_GLUCOSE_LIST:
            return {...state, glucoseList: {...action.payload}}

        case FETCH_CURRENT_GLUCOSE:
            return {...state, currentGlucose: {...action.payload}}

        case SHOW_SET_GLUCOSE_MODAL:
            return {...state, setGlucoseModalIsOpened: true}
        
        case HIDE_SET_GLUCOSE_MODAL:
            return {...state, setGlucoseModalIsOpened: false}

        default: return state
    }
}