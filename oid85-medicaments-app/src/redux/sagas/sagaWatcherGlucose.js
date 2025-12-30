import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchGetGlucoseList} from '../actions/glucoseActions'
import {
    SAGA_GLUCOSE_LIST, 
    SAGA_SET_GLUCOSE
} from '../types/glucoseTypes'
import {
    getGlucoseListFromApi,
    setGlucoseFromApi
} from '../api/glucoseApi'

const currentGlucose = (state) => state.glucose.currentGlucose

export function* sagaWatcherGlucose() {
    yield takeEvery(SAGA_GLUCOSE_LIST, sagaWorkerGetGlucoseList)
    yield takeEvery(SAGA_SET_GLUCOSE, sagaWorkerSetGlucose)
}

function* sagaWorkerGetGlucoseList() {
    let getGlucoseListResult = yield call(getGlucoseListFromApi)    
    yield put(fetchGetGlucoseList(getGlucoseListResult))
}

function* sagaWorkerSetGlucose() {
    let glucose = yield select(currentGlucose)
    yield call(setGlucoseFromApi, glucose.date, glucose.type, glucose.value)
    let getGlucoseListResult = yield call(getGlucoseListFromApi)
    yield put(fetchGetGlucoseList(getGlucoseListResult))
}
