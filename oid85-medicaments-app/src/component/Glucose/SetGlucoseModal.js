import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Modal from 'react-modal';
import { 
    hideSetGlucoseModal, 
    fetchCurrentGlucose,
    sagaSetGlucose 
} from '../../redux/actions/glucoseActions'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const SetGlucoseModal = () => {
    
    const dispatch = useDispatch()
    const currentGlucose = useSelector(state => state.glucose.currentGlucose)
    const setGlucoseModalIsOpened = useSelector(state => state.glucose.setGlucoseModalIsOpened)

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
                    isOpen={setGlucoseModalIsOpened}
                    style={customStyles}>
                    <h6>Новое измерение</h6>
                    <form>
                        <input 
                            className='form-control set-glucose-modal-input' 
                            type="number"                              
                            placeholder='Глюкоза' 
                            onChange={ (event) => { 
                                dispatch(fetchCurrentGlucose({...currentGlucose, value: event.target.value}))
                                }} />                                                                
                        <button 
                            className='btn btn-outline-primary set-glucose-modal-save-button' 
                            onClick={ () => {
                                    dispatch(sagaSetGlucose())
                                    dispatch(hideSetGlucoseModal())
                                    }}>Сохранить</button>
                        <button 
                            className='btn btn-outline-primary set-glucose-modal-cancel-button' 
                            onClick={ () => { 
                                dispatch(hideSetGlucoseModal()) 
                                }}>Закрыть</button>                        
                    </form>
                </Modal>
            </div>
        </React.Fragment>
    )
}