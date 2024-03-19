import './TextField.css'

const TextField = (props) => {
    const placeholderString = `${props.placeholder}...`
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input required={props.required}placeholder={placeholderString}/>
        </div>
    )
}

export default TextField