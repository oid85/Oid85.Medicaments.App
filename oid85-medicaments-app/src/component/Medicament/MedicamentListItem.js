import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { reserveColor } from '../../colorHelper'

export const MedicamentListItem = ({key, medicament}) => {

    let color = reserveColor(medicament.reserve)

    return (
        <React.Fragment>
            <div className='medicament-list-item horizontal-container'>
                <div className='medicament-list-item-name border-style'>
                    {medicament.name}
                </div>
                <div className='medicament-list-item-reserve border-style' style={{backgroundColor: color}}>
                    {medicament.reserve} шт.
                </div>                
            </div>
        </React.Fragment>
    )
}