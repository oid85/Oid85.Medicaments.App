import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideEditMedicamentModal, 
    fetchCurrentMedicament,
    sagaEditMedicament,
    sagaDeleteMedicament 
} from '../../redux/actions/medicamentActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const EditMedicamentModal = () => {
    
    const dispatch = useDispatch()
    const currentMedicament = useSelector(state => state.medicament.currentMedicament)
    const editMedicamentModalIsOpened = useSelector(state => state.medicament.editMedicamentModalIsOpened)

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
                    isOpen={editMedicamentModalIsOpened}
                    style={customStyles}>
                    <h6>Редактировать</h6>
                    <form>
                        <input 
                            className='form-control edit-medicament-modal-input' 
                            type="text" 
                            defaultValue={currentMedicament.name} 
                            placeholder='Наименование' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMedicament({...currentMedicament, name: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-medicament-modal-input' 
                            type="number" 
                            defaultValue={currentMedicament.dose} 
                            placeholder='Дозировка' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMedicament({...currentMedicament, dose: event.target.value})) 
                                }} />
                        <input 
                            className='form-control edit-medicament-modal-input' 
                            type="text" 
                            defaultValue={currentMedicament.alias} 
                            placeholder='Псевдоним' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMedicament({...currentMedicament, alias: event.target.value})) 
                                }} />                                
                        <button 
                            className='btn btn-outline-primary edit-medicament-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaEditMedicament())
                                    dispatch(hideEditMedicamentModal())
                                    }}>Сохранить</button>
                        <button 
                            className='btn btn-outline-primary edit-medicament-modal-delete-button' 
                            onClick={ () => {
                                    dispatch(sagaDeleteMedicament())
                                    dispatch(hideEditMedicamentModal())
                                    }}>Удалить</button>                                    
                        <button 
                            className='btn btn-outline-primary edit-medicament-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideEditMedicamentModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}