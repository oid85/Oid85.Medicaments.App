import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { MedicamentsList } from '../Medicaments/MedicamentsList'
import './styles.css'

export const MedicamentsScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <MedicamentsList />
            </div>            
        </React.Fragment>
    )    
}
