import React from 'react'
import Label from './Label'

const Button = (props) => {
    const getData =(input,label)=>{
        console.log(input,label)
    }
    
    return (
        <button id={props.id} onClick={()=>getData(props.click.source_id,props.click.target_id)}> {props.text}</button>
    )
}

export default Button
