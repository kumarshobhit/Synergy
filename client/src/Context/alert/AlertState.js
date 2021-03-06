import React,{useReducer} from 'react'
import uuid from 'uuid'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'
import {
    SET_ALERT,REMOVE_ALERT
} from '../Types'

const AlertState = props => {
    const intialState = [

    ]

    const [state,dispatch] = useReducer(AlertReducer,intialState)

    // Set Alert
    const setAlert = (msg,type) => {
        const id=uuid.v4() ;
        dispatch({
            type:SET_ALERT,
            payload:{msg,type,id}
        })
        setTimeout(()=>dispatch({type:REMOVE_ALERT,payload:id}),5000)
    }

    
    return (
         <AlertContext.Provider 
        value={{
            alerts:state,
            setAlert
        }}
         >
         {props.children}
         </AlertContext.Provider>
    )
}

export default AlertState