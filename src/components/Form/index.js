import './Form.css'
import TextField from '../TextField';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';

const Form = (props) =>{
    
   
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')
    


    const cardSave = (event) =>{
        event.preventDefault()
        props.newMember({name,role,image,team})
    }

    return(
        <section className='formulario'>
            <form onSubmit={cardSave}>
                <h1>Preencha os campos com os dados do professor</h1>
                <TextField
                    required={true}
                    label = "Nome"
                    placeholder = "Digite seu nome"
                    value={name}
                    whenChange={value => setName(value)}
                />
                <TextField
                    required={true}
                    label = "Cargo-Faixa"
                    placeholder = "Digite seu cargo"
                    value={role}
                    whenChange={value => setRole(value)}
                />
                <TextField
                    label = "Imagem"
                    placeholder = "Digite o endereço da imagem"
                    value={image}
                    whenChange={value => setImage(value)}
                />
                <DropdownList
                    required={true}
                    label = "Arte Marcial" 
                    items = {props.teams}
                    whenCnange={value => setTeam(value)}
                />
                <Button>
                    Criar card
                </Button>
            </form>
        </section>
    )
}

export default Form