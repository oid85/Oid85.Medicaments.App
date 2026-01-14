import {sendPostRequest} from './api'

const controller = 'medicaments'

export const getMedicamentListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const createMedicamentFromApi = async (name, dose, alias) => {
    return sendPostRequest(`${controller}/create`, {name, dose, alias})
}

export const editMedicamentFromApi = async (id, name, dose, alias) => {
    return sendPostRequest(`${controller}/edit`, {id, name, dose, alias})
}

export const deleteMedicamentFromApi = async (id) => {
    return sendPostRequest(`${controller}/delete`, {id})
}

export const addMedicamentFromApi = async (id, value) => {
    return sendPostRequest(`${controller}/add`, {id, value})
}
