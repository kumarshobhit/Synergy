import React from 'react'
import spinner from './spinner.gif'
function Spinner() {
    return (
        <div>
            <img src={spinner} alt="l oading.." style={{width:'200px', margin:'auto',display:'block'}} />
        </div>
    )
}

export default Spinner
