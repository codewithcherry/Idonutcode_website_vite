import React from 'react'
import { useState, useEffect } from 'react';

const Alert = ({show,type,message}) => {
    const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); // Adjust this value to change how long the message stays visible (in milliseconds)

    return () =>{
      clearTimeout(timer);
    }
  }, [show]);

  let bgColor;
  switch (type) {
    case 'success':
      bgColor = 'bg-green-200';
      break;
    case 'error':
      bgColor = 'bg-red-200';
      break;
    case 'warning':
      bgColor = 'bg-yellow-200';
      break;
    default:
      bgColor = 'bg-gray-200'; // Default background color
  }

  return (
    <>
      {visible && (
        <div className={`fixed top-0 right-0 m-4 p-4 ${bgColor} text-${type}-800 rounded-md shadow-md`}>
          {message}
        </div>
      )}
    </>
  );
}

export default Alert
