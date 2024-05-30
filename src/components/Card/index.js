import './Card.css'

const Card = () => {
    return (
        <div className='card'>
             <div className='header'>
                <img src='https://github.com/rafaelbucard.png' alt='Rafael Bucard'/>
            </div>
            <div className='footer'>
                <h4>Rafael</h4>
                <h5>Instrutor</h5>
            </div>
        </div>
    )
}

export default Card