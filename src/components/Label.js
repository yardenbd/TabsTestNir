import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import {useInput} from '../InputValueContext'
const Label = (props) => {
   const [updatedValue,setUpdatedValue]=useState('')
    const {isClicked,value} = useInput()
    useEffect(()=>{
        setUpdatedValue(value)
    },[isClicked])
    return (
       <label id={props.id}>{updatedValue}</label>
    )
}

export default Label
