import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import {sagaMedicamentList} from '../../redux/actions/medicamentActions'
import {MedicamentListItem} from './MedicamentListItem'
import './styles.css'
import { AddMedicamentModal } from './AddMedicamentModal'

export const MedicamentList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const medicamentList = useSelector(state => state.medicament.medicamentList)

    useEffect(() => {
        dispatch(sagaMedicamentList())
    }, [])

    return (
        <React.Fragment>
        {
            !medicamentList.result || loading
            ? <Loader/>
            : 
            <div className='medicament-list'>
                {                
                    medicamentList.result.medicaments.map((medicament, index) => (
                        <MedicamentListItem key = {index} medicament = {medicament} />
                    ))
                }
                <AddMedicamentModal />
            </div>        
        }
        </React.Fragment>                
    )
}