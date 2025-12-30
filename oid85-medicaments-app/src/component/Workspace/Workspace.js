import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useSelector } from 'react-redux'
import 'react-tabs/style/react-tabs.css'
import { Alert } from '../Alert/Alert'
import { GlucoseScreen } from '../Screens/GlucoseScreen'

export const Workspace = () => {
    const alert = useSelector(state => state.app.alert)

    return (
        <React.Fragment>            
            {alert && <Alert text={alert} />}
            <Tabs>
                <TabList>
                    <Tab>Глюкоза</Tab>
                </TabList>  
                <TabPanel>
                    <GlucoseScreen />
                </TabPanel>                              
            </Tabs>
        </React.Fragment>
    )    
}
