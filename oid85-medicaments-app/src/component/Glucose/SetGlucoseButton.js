import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCurrentGlucose, showSetGlucoseModal} from '../../redux/actions/glucoseActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const SetGlucoseButton = ({date, type}) => {
    
    const dispatch = useDispatch()
    const currentGlucose = useSelector(state => state.glucose.currentGlucose)
    
    return (
        <React.Fragment>
            <button 
                className='btn btn-outline-link set-glucose-button'
                onClick={() => {
                    dispatch(fetchCurrentGlucose({...currentGlucose, date: date, type: type}))
                    dispatch(showSetGlucoseModal())
                }                
                }>...</button>
        </React.Fragment>
    )
}