import React from 'react'
import { useInput } from '../InputValueContext'


const Button = (props) => {
  const {clickHandler,disableClick}=useInput()
    return (
        <button id={props.id} onClick={clickHandler} onBlur={disableClick}> {props.text}</button>
    )
}

export default Button
