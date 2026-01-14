import {
    SAGA_MEDICAMENT_LIST,
    SAGA_CREATE_MEDICAMENT,
    SAGA_EDIT_MEDICAMENT,
    SAGA_DELETE_MEDICAMENT,
    SAGA_ADD_MEDICAMENT,
    FETCH_MEDICAMENT_LIST,
    FETCH_CURRENT_MEDICAMENT,
    SHOW_CREATE_MEDICAMENT_MODAL,
    HIDE_CREATE_MEDICAMENT_MODAL,
    SHOW_EDIT_MEDICAMENT_MODAL,
    HIDE_EDIT_MEDICAMENT_MODAL,
    SHOW_ADD_MEDICAMENT_MODAL,
    HIDE_ADD_MEDICAMENT_MODAL
} from '../types/medicamentTypes'

export const sagaMedicamentList = () => {
    return {
        type: SAGA_MEDICAMENT_LIST
    }
}

export const sagaCreateMedicament = () => {    
    return {
        type: SAGA_CREATE_MEDICAMENT
    }
}

export const sagaEditMedicament = () => {    
    return {
        type: SAGA_EDIT_MEDICAMENT
    }
}

export const sagaDeleteMedicament = () => {    
    return {
        type: SAGA_DELETE_MEDICAMENT
    }
}

export const sagaAddMedicament = () => {    
    return {
        type: SAGA_ADD_MEDICAMENT
    }
}

export const fetchMedicamentList = (data) => {
    return {
        type: FETCH_MEDICAMENT_LIST,
        payload: data
    }
}

export const fetchCurrentMedicament = (data) => {
    return {
        type: FETCH_CURRENT_MEDICAMENT,
        payload: data
    }
}

export const showCreateMedicamentModal = () => {
    return {
        type: SHOW_CREATE_MEDICAMENT_MODAL
    }
}

export const hideCreateMedicamentModal = () => {
    return {
        type: HIDE_CREATE_MEDICAMENT_MODAL
    }
}

export const showEditMedicamentModal = () => {
    return {
        type: SHOW_EDIT_MEDICAMENT_MODAL
    }
}

export const hideEditMedicamentModal = () => {
    return {
        type: HIDE_EDIT_MEDICAMENT_MODAL
    }
}

export const showAddMedicamentModal = () => {
    return {
        type: SHOW_ADD_MEDICAMENT_MODAL
    }
}

export const hideAddMedicamentModal = () => {
    return {
        type: HIDE_ADD_MEDICAMENT_MODAL
    }
}
