import React from 'react'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { GlucoseList } from '../Glucose/GlucoseList'
import './styles.css'

export const GlucoseScreen = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <div>
                <GlucoseList />
            </div>            
        </React.Fragment>
    )    
}
