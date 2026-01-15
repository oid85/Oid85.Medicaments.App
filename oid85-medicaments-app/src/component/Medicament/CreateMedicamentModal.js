import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideCreateMedicamentModal, 
    fetchCurrentMedicament,
    sagaCreateMedicament 
} from '../../redux/actions/medicamentActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const CreateMedicamentModal = () => {
    
    const dispatch = useDispatch()
    const currentMedicament = useSelector(state => state.medicament.currentMedicament)
    const createMedicamentModalIsOpened = useSelector(state => state.medicament.createMedicamentModalIsOpened)

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
                    isOpen={createMedicamentModalIsOpened}
                    style={customStyles}>
                    <h6>Создать</h6>
                    <form>
                        <input 
                            className='form-control create-medicament-modal-input' 
                            type="text" 
                            defaultValue='' 
                            placeholder='Наименование' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMedicament({...currentMedicament, name: event.target.value})) 
                                }} />
                        <input 
                            className='form-control create-medicament-modal-input' 
                            type="number" 
                            placeholder='Дозировка' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMedicament({...currentMedicament, dose: event.target.value})) 
                                }} />
                        <input 
                            className='form-control create-medicament-modal-input' 
                            type="text" 
                            defaultValue='' 
                            placeholder='Псевдоним' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentMedicament({...currentMedicament, alias: event.target.value})) 
                                }} />
                        <button 
                            className='btn btn-outline-primary create-medicament-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaCreateMedicament())
                                    dispatch(hideCreateMedicamentModal())
                                    }}>Сохранить</button>
                        <button 
                            className='btn btn-outline-primary create-medicament-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideCreateMedicamentModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}