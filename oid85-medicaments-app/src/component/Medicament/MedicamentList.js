import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import {sagaMedicamentList} from '../../redux/actions/medicamentActions'
import {MedicamentListItem} from './MedicamentListItem'
import './styles.css'
import { AddMedicamentModal } from './AddMedicamentModal'
import { CreateMedicamentModal } from './CreateMedicamentModal'
import { EditMedicamentModal } from './EditMedicamentModal'
import { CreateMedicamentButton } from './CreateMedicamentButton'

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
                <CreateMedicamentButton />
                <div className='medicament-list-item horizontal-container'>
                <div className='medicament-list-item-name border-style'>
                    Наименование
                </div>
                <div className='medicament-list-item-dose border-style'>
                    В день, шт.
                </div>                
                <div className='medicament-list-item-reserve border-style'>
                    Остаток, шт.
                </div>
            </div>                
                {                
                    medicamentList.result.medicaments.map((medicament, index) => (
                        <MedicamentListItem key = {index} medicament = {medicament} />
                    ))
                }
                <AddMedicamentModal />
                <CreateMedicamentModal />
                <EditMedicamentModal />
            </div>        
        }
        </React.Fragment>                
    )
}