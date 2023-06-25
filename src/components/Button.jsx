import React from 'react';

const Button = ({color,bgColor,size,text,borderRadius,icon,onClick}) => {
  return (
    <button type='button'
    style={{backgroundColor:bgColor,color,borderRadius}} 
    className={`text-${size} p-3 hover:drop-shadow-xl`}
    onClick={onClick}>
      {text}
      {icon}

    </button>
  )
}

export default Button
