import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { GlucoseListDayItemCalendar } from './GlucoseListDayItemCalendar'
import { GlucoseValueItem } from './GlucoseValueItem'
import { SetGlucoseButton } from './SetGlucoseButton'

export const GlucoseListDayItem = ({key, dayItem}) => {

    return (
        <React.Fragment>
            <div className='horizontal-container' key={key}>
                <GlucoseListDayItemCalendar date = {dayItem.date} />
                <div className='horizontal-container'>
                    <GlucoseValueItem value = {dayItem.beforeMorningFood} />
                    <SetGlucoseButton date = {dayItem.date} type = 'BeforeMorningFood' />
                </div>
                <div className='horizontal-container'>
                    <GlucoseValueItem value = {dayItem.afterMorningFood} />
                    <SetGlucoseButton date = {dayItem.date} type = 'AfterMorningFood' />
                </div>
                <div className='horizontal-container'>
                    <GlucoseValueItem value = {dayItem.beforeTraining} />
                    <SetGlucoseButton date = {dayItem.date} type = 'BeforeTraining' />
                </div>
                <div className='horizontal-container'>
                    <GlucoseValueItem value = {dayItem.afterTraining} />
                    <SetGlucoseButton date = {dayItem.date} type = 'AfterTraining' />
                </div> 
                <div className='horizontal-container'>
                    <GlucoseValueItem value = {dayItem.beforeEveningFood} />
                    <SetGlucoseButton date = {dayItem.date} type = 'BeforeEveningFood' />
                </div>
                <div className='horizontal-container'>
                    <GlucoseValueItem value = {dayItem.beforeNight} />
                    <SetGlucoseButton date = {dayItem.date} type = 'BeforeNight' />
                </div>                
            </div>
        </React.Fragment>
    )
}