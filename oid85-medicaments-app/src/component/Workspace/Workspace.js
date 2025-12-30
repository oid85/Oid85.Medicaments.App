import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { MedicamentsScreen } from '../Screens/MedicamentsScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Лекарства</Tab>
                </TabList>  
                <TabPanel>
                    <MedicamentsScreen />
                </TabPanel>                              
            </Tabs>
        </React.Fragment>
    )    
}
