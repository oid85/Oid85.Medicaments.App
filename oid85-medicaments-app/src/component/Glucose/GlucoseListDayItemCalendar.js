import React from 'react'
import {Calendar} from '../Calendar/Calendar'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'

export const GlucoseListDayItemCalendar = ({date}) => {    

    return (
        <React.Fragment>
            <div className='glucose-calendar border-style'>
                <Calendar date = {date} />
            </div>
        </React.Fragment>
    )
}