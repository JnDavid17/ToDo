import React from 'react'
import './TodoIcon.css'
import { BsCheckCircle } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'

const iconTypes = {
    "check": color => (
        <BsCheckCircle className='Icon-svg Icon-svg--check' fill={color}/>
    ),
    "delete": color => (
        <BsTrash className='Icon-svg Icon-svg--delete' fill={color}/>
    )
}

function TodoIcon({type, color = 'gray', onClick}) {
  return (
    <span className={`Icon-container Icon-container--${type}`}
    onClick={onClick}
    >
    {iconTypes[type](color)}
    </span>
  )
}

export {TodoIcon}