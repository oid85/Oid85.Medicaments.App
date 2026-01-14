import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchCurrentMedicament, showAddMedicamentModal} from '../../redux/actions/medicamentActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const AddMedicamentButton = ({value}) => {
    
    const dispatch = useDispatch()
    const currentMedicament = useSelector(state => state.medicament.currentMedicament)
    
    return (
        <React.Fragment>
            <button 
                className='btn btn-outline-link set-medicament-button'
                onClick={() => {
                    dispatch(fetchCurrentMedicament({...currentMedicament, value: value}))
                    dispatch(showAddMedicamentModal())
                }                
                }>+</button>
        </React.Fragment>
    )
}