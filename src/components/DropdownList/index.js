import './DropdownList.css'

const DropdownList = (props) =>{
    
    return (
        <div className = "dropdown-list">
            <label>{props.label}</label>
            <select onChange={event => props.whenCnange(event.target.value)} required={props.required} value={props.value} >
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropdownList