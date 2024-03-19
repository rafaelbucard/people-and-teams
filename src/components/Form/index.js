import './Form.css'
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';

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

    const cardSave = (event) =>{
        event.preventDefault()
        console.log('Form foi submetido')
    }

    return(
        <section className='formulario'>
            <form onSubmit={cardSave}>
                <h1>Preencha os campos com os dados do professor</h1>
                <TextField required={true} label = "Nome" placeholder = "Digite seu nome"/>
                <TextField required={true} label = "Cargo-Faixa" placeholder = "Digite seu cargo"/>
                <TextField label = "Imagem" placeholder = "Digite o endereço da imagem" />
                <DropdownList required={true} label = "Arte Marcial" items = {teams}/>
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form