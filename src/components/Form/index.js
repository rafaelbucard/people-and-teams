import './Form.css'
import TextField from '../TextField';
import DropdownList from '../DropdownList';

const Form = () =>{

    const teams = [
        'Jiu-jitsu',
        'Luta livre',
        'Capoeira',
        'Muay Thai',
        'Judô',
        'MMA',
        'Box'
    ]

    return(
        <section className='formulario'>
            <form>
                <h1>Preencha os campos com os dados do professor</h1>
                <TextField label = "Nome" placeholder = "Digite seu nome"/>
                <TextField label = "Cargo" placeholder = "Digite seu cargo"/>
                <TextField label = "Imagem" placeholder = "Digite o endereço da imagem" />
                <DropdownList label = "Time" items = {teams}/>
            </form>
        </section>
    )
}

export default Form