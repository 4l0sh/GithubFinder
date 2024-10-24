import React from 'react'

const Alert = ({alert}) => {
  return (
    alert !== null && (
        <div className={`aler alert-${alert.type}`}>
            <i className='fas fa-info-circle'></i> {alert.msg}
        </div>
    )
  )
}

export default Alert
