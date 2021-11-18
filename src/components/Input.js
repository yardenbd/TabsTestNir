import React from 'react'
import {useInput} from '../InputValueContext'
const Input = (props) => {
    const input = useInput()
    const getData =(e)=>{
      input.getInputValue(e.target.value)
    }
    return (
       <input id={props.id}  placeholder={props.placeHolder} onChange={getData}/>
    )
}

export default Input
