import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideAddMedicamentModal, 
    fetchCurrentMedicament,
    sagaAddMedicament 
} from '../../redux/actions/medicamentActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const AddMedicamentModal = () => {
    
    const dispatch = useDispatch()
    const currentMedicament = useSelector(state => state.medicament.currentMedicament)
    const addMedicamentModalIsOpened = useSelector(state => state.medicament.addMedicamentModalIsOpened)

    const customStyles = {
        content: {
          top: '50%',
          left: '50%', 
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',                          
          transform: 'translate(-50%, -50%)'
        }
      };

    return (
        <React.Fragment>
            <div>                
                <Modal
                    isOpen={addMedicamentModalIsOpened}
                    style={customStyles}>
                    <h6>Пополнить</h6>
                    <form>
                        <input 
                            className='form-control add-medicament-modal-input' 
                            type="number"                              
                            placeholder='Количество' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMedicament({...currentMedicament, value: event.target.value}))
                                }} />                                                                
                        <button 
                            className='btn btn-outline-primary add-medicament-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaAddMedicament())
                                    dispatch(hideAddMedicamentModal())
                                    }}>Сохранить</button>
                        <button 
                            className='btn btn-outline-primary add-medicament-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideAddMedicamentModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}