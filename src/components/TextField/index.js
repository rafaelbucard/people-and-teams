import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {
    const placeholderString = `${props.placeholder}...`

 
  
    const whenToType = (event) =>{
        props.whenChange(event.target.value)
    }
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={whenToType} required={props.required}placeholder={placeholderString}/>
        </div>
    )
}

export default TextField
