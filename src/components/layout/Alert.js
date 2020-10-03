import React from 'react';

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      //The class name is in the backticks because we have different types of alert and all types has their owen classes in css file so
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    )
  );
};
export default Alert;
