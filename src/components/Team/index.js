import './Team.css'
import Card from '../Card';

const Team = (props) => {

    return (
        <section className='team' style={{backgroundColor: props.secColor}}>
            <h3 style={{borderColor: props.fistColor}}>{props.name}</h3>
            <Card/>
        </section>
    )
    
}

export default Team