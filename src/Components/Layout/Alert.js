import React, {useContext} from 'react';
import AlertContext from '../../context/gitHub/alert/alerContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const {alert} = alertContext;

  return (
    alert !== null && (
        <div className={`aler alert-${alert.type}`}>
            <i className='fas fa-info-circle'></i> {alert.msg}
        </div>
    )
  )
}

export default Alert
