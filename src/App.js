import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
 
  const teams = [
    {
      name: 'Jiu-jitsu',
      fistColor: '#82CFFA',
      secColor: '#E8F8FF'
    },
    {
      name: 'Luta livre',
      fistColor: '#A6D157',
      secColor: '#F0F8E2'
    },
    {
      name: 'Capoeira',
      fistColor: '#E06B69',
      secColor: '#FDE7E8'
    },
    {
      name: 'Muay Thai',
      fistColor: '#D86EBF',
      secColor: '#FAE5F5'
    },
    {
      name: 'Judô',
      fistColor: '#FEBA05',
      secColor: '#FFF5D9'
    },
    {
      name: 'MMA',
      fistColor: '#FF8A29',
      secColor: '#FFEEDF'
    },
    {
      name: 'Box',
      fistColor: '#57C278',
      secColor: '#D9F7E9'
    },
  ]

  const [member, setMember] = useState([])

  const addMember = (member) => {
    console.log(member)
  }
  return (
    <div className="App">
      <Banner/>
      <Form newMember={member => addMember(member)} teams={teams.map(team => team.name)}/>
      {teams.map( team => <Team key={team.name} name={team.name} fistColor={team.fistColor} secColor={team.secColor}/>)}
    </div>
  );
}

export default App;
