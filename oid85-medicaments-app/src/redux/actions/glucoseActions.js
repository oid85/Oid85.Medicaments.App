import {
    SAGA_GLUCOSE_LIST,
    SAGA_SET_GLUCOSE,
    FETCH_GLUCOSE_LIST,
    FETCH_CURRENT_GLUCOSE,
    SHOW_SET_GLUCOSE_MODAL,
    HIDE_SET_GLUCOSE_MODAL
} from '../types/glucoseTypes'


export const sagaGetGlucoseList = () => {
    return {
        type: SAGA_GLUCOSE_LIST
    }
}

export const sagaSetGlucose = () => {    
    return {
        type: SAGA_SET_GLUCOSE
    }
}

export const fetchGetGlucoseList = (data) => {
    return {
        type: FETCH_GLUCOSE_LIST,
        payload: data
    }
}

export const fetchCurrentGlucose = (data) => {
    return {
        type: FETCH_CURRENT_GLUCOSE,
        payload: data
    }
}

export const showSetGlucoseModal = () => {
    return {
        type: SHOW_SET_GLUCOSE_MODAL
    }
}

export const hideSetGlucoseModal = () => {
    return {
        type: HIDE_SET_GLUCOSE_MODAL
    }
}
