import { combineReducers } from 'redux'
import { appReducer } from './appReducer'
import { glucoseReducer } from './glucoseReducer'

export const rootReducer = combineReducers({
    app: appReducer,
    glucose: glucoseReducer
})