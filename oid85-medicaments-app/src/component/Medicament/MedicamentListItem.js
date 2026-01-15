import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './styles.css'
import { reserveColor } from '../../colorHelper'
import { AddMedicamentButton } from './AddMedicamentButton'
import { EditMedicamentButton } from './EditMedicamentButton'

export const MedicamentListItem = ({key, medicament}) => {

    let color = reserveColor(medicament.reserve)

    return (
        <React.Fragment>
            <div className='medicament-list-item horizontal-container'>
                <div className='medicament-list-item-name border-style'>
                    {medicament.name}
                </div>
                <div className='medicament-list-item-dose border-style'>
                    {medicament.dose}
                </div>                
                <div className='medicament-list-item-reserve border-style' style={{backgroundColor: color}}>
                    {medicament.reserve}
                </div>
                <AddMedicamentButton medicament = {medicament} />
                <EditMedicamentButton medicament = {medicament} />
            </div>
        </React.Fragment>
    )
}