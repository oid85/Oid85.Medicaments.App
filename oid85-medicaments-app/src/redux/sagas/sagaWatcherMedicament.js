import {call, put, select, takeEvery} from 'redux-saga/effects'
import {fetchMedicamentList} from '../actions/medicamentActions'
import {
    SAGA_MEDICAMENT_LIST, 
    SAGA_CREATE_MEDICAMENT,
    SAGA_EDIT_MEDICAMENT,
    SAGA_DELETE_MEDICAMENT,
    SAGA_ADD_MEDICAMENT
} from '../types/medicamentTypes'
import {
    getMedicamentListFromApi,
    createMedicamentFromApi,
    editMedicamentFromApi,
    deleteMedicamentFromApi,
    addMedicamentFromApi
} from '../api/medicamentApi'

const currentMedicament = (state) => state.medicament.currentMedicament

export function* sagaWatcherMedicament() {
    yield takeEvery(SAGA_MEDICAMENT_LIST, sagaWorkerMedicamentList)
    yield takeEvery(SAGA_CREATE_MEDICAMENT, sagaWorkerCreateMedicament)
    yield takeEvery(SAGA_EDIT_MEDICAMENT, sagaWorkerEditMedicament)
    yield takeEvery(SAGA_DELETE_MEDICAMENT, sagaWorkerDeleteMedicament)
    yield takeEvery(SAGA_ADD_MEDICAMENT, sagaWorkerAddMedicament)
}

function* sagaWorkerMedicamentList() {
    let getMedicamentListResult = yield call(getMedicamentListFromApi)    
    yield put(fetchMedicamentList(getMedicamentListResult))
}

function* sagaWorkerCreateMedicament() {
    let medicament = yield select(currentMedicament)
    yield call(createMedicamentFromApi, medicament.name, medicament.dose, medicament.alias)
    let getMedicamentListResult = yield call(getMedicamentListFromApi)
    yield put(fetchMedicamentList(getMedicamentListResult))
}

function* sagaWorkerEditMedicament() {
    let medicament = yield select(currentMedicament)
    yield call(editMedicamentFromApi, medicament.id, medicament.name, medicament.dose, medicament.alias)
    let getMedicamentListResult = yield call(getMedicamentListFromApi)
    yield put(fetchMedicamentList(getMedicamentListResult))
}

function* sagaWorkerDeleteMedicament() {
    let medicament = yield select(currentMedicament)
    yield call(deleteMedicamentFromApi, medicament.id)
    let getMedicamentListResult = yield call(getMedicamentListFromApi)
    yield put(fetchMedicamentList(getMedicamentListResult))
}

function* sagaWorkerAddMedicament() {
    let medicament = yield select(currentMedicament)
    yield call(addMedicamentFromApi, medicament.id, medicament.value)
    let getMedicamentListResult = yield call(getMedicamentListFromApi)
    yield put(fetchMedicamentList(getMedicamentListResult))
}