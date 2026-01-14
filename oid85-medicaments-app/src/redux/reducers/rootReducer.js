import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { medicamentReducer } from './medicamentReducer'

export const rootReducer = combineReducers({
    app: appReducer,
    medicament: medicamentReducer
})