import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { glucoseColor } from '../../colorHelper'

export const GlucoseValueItem = ({value}) => {

    let color = glucoseColor(value)

    return (
        <React.Fragment>
            <div className='glucose-container border-style'>
                {!value ? <div></div> : <div className='glucose-container-value border-style' style={{backgroundColor: color}}>{value}</div>}
            </div>
        </React.Fragment>
    )
}