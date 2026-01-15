import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {showCreateMedicamentModal} from '../../redux/actions/medicamentActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const CreateMedicamentButton = () => {
    
    const dispatch = useDispatch()    
    
    return (
        <React.Fragment>
            <button 
                className='btn btn-outline-primary create-medicament-list-item-button'
                onClick={() => {                    
                    dispatch(showCreateMedicamentModal())
                }                
                }>Добавить</button>
        </React.Fragment>
    )
}