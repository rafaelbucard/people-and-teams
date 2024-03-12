import './TextField.css'

const TextField = (props) => {
    const placeholderString = `${props.placeholder}...`
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input placeholder={placeholderString}/>
        </div>
    )
}

export default TextField