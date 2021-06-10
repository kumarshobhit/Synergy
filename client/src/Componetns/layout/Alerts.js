import React, { useContext } from 'react'
import AlertContext from '../../Context/alert/alertContext'

const Alerts = () => {
    const alertContext =useContext(AlertContext)
    const {alerts}=alertContext
    return (
       alerts.length> 0 && alerts.map(alert => (
           <div key={alert.id} className={`alert alert-${alert.type}`}>
           <i className="fas fas-info-circle">{alert.msg}</i>
           </div>
       ))
    )
}

export default Alerts
