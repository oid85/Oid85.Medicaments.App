import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Loader from '../Loader/Loader'
import {sagaGetGlucoseList} from '../../redux/actions/glucoseActions'
import {GlucoseListDayItem} from './GlucoseListDayItem'
import './styles.css'
import { SetGlucoseModal } from './SetGlucoseModal'

export const GlucoseList = () => {
    
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const glucoseList = useSelector(state => state.glucose.glucoseList)

    useEffect(() => {
        dispatch(sagaGetGlucoseList())
    }, [])

    return (
        <React.Fragment>
        {
            !glucoseList.result || loading
            ? <Loader/>
            : 
            <div className='glucose-list vertical-container'>
                {
                    <div className='horizontal-container'>
                        <div className='glucose-empty-cell border-style'></div>   
                        {                
                            ['Перед завтраком', 'После завтрака', 'Перед тренировкой', 'После тренировки', 'Перед ужином', 'Перед сном']
                            .map((time, index) => (
                                <div className='header-cell border-style'>{time}</div>
                            ))
                        }                                           
                        </div>
                }
                {                
                    glucoseList.result.dayItems.map((dayItem, index) => (
                        <GlucoseListDayItem key = {index} dayItem = {dayItem} />
                    ))
                }
                <SetGlucoseModal />
            </div>        
        }
        </React.Fragment>                
    )
}