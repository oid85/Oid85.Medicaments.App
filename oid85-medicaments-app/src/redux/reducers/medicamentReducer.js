import {
    FETCH_MEDICAMENT_LIST,
    FETCH_CURRENT_MEDICAMENT,
    SHOW_CREATE_MEDICAMENT_MODAL,
    HIDE_CREATE_MEDICAMENT_MODAL,
    SHOW_EDIT_MEDICAMENT_MODAL,
    HIDE_EDIT_MEDICAMENT_MODAL,        
    SHOW_ADD_MEDICAMENT_MODAL,
    HIDE_ADD_MEDICAMENT_MODAL  
} from '../types/medicamentTypes'

const initialState = {
    medicamentList: {},
    currentMedicament: {},
    createMedicamentModalIsOpened: false,
    editMedicamentModalIsOpened: false,
    addMedicamentModalIsOpened: false
}

export const medicamentReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_MEDICAMENT_LIST:
            return {...state, medicamentList: {...action.payload}}

        case FETCH_CURRENT_MEDICAMENT:
            return {...state, currentMedicament: {...action.payload}}

        case SHOW_CREATE_MEDICAMENT_MODAL:
            return {...state, createMedicamentModalIsOpened: true}
        
        case HIDE_CREATE_MEDICAMENT_MODAL:
            return {...state, createMedicamentModalIsOpened: false}

        case SHOW_EDIT_MEDICAMENT_MODAL:
            return {...state, editMedicamentModalIsOpened: true}
        
        case HIDE_EDIT_MEDICAMENT_MODAL:
            return {...state, editMedicamentModalIsOpened: false}

        case SHOW_ADD_MEDICAMENT_MODAL:
            return {...state, addMedicamentModalIsOpened: true}
        
        case HIDE_ADD_MEDICAMENT_MODAL:
            return {...state, addMedicamentModalIsOpened: false}

        default: return state
    }
}