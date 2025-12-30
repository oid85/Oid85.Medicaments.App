import {sendPostRequest} from './api'

const controller = 'glucose'

export const getGlucoseListFromApi = async () => {
    return sendPostRequest(`${controller}/list`, {})
}

export const setGlucoseFromApi = async (date, type, value) => {
    return sendPostRequest(`${controller}/set`, {date, type, value})
}
