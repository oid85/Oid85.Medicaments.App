import React from 'react'
import {useDispatch} from 'react-redux'
import {fetchCurrentMedicament, showEditMedicamentModal} from '../../redux/actions/medicamentActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditMedicamentButton = ({medicament}) => {
    
    const dispatch = useDispatch()    
    
    return (
        <React.Fragment>
            <button 
                className='btn btn-outline-primary edit-medicament-button'
                onClick={() => {    
                    dispatch(fetchCurrentMedicament({...medicament}))
                    dispatch(showEditMedicamentModal())
                }                
                }>Изменить</button>
        </React.Fragment>
    )
}