import React from 'react'
import {useDispatch} from 'react-redux'
import {fetchCurrentMedicament, showAddMedicamentModal} from '../../redux/actions/medicamentActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const AddMedicamentButton = ({medicament}) => {
    
    const dispatch = useDispatch()
    
    return (
        <React.Fragment>
            <button 
                className='btn btn-outline-primary add-medicament-button'
                onClick={() => {
                    dispatch(fetchCurrentMedicament({...medicament}))
                    dispatch(showAddMedicamentModal())
                }                
                }>Пополнить</button>
        </React.Fragment>
    )
}