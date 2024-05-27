import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
 
  const teams = [
    {
      name: 'Jiu-jitsu',
      fistColor: '#d9f7e9',
      secColor: '#57c278'
    },
    {
      name: 'Luta livre',
      fistColor: '',
      secColor: ''
    },
    {
      name: 'Capoeira',
      fistColor: '#e8f8ff',
      secColor: '#82cffa'
    },
    {
      name: 'Muay Thai',
      fistColor: '#f08fe2',
      secColor: '#a6d157'
    },
    {
      name: 'Judô',
      fistColor: '#fde7e8',
      secColor: '#db6ebf'
    },
    {
      name: 'MMA',
      fistColor: '#fff5d9',
      secColor: '#ffba05'
    },
    {
      name: 'Box',
      fistColor: '#ffeedf',
      secColor: '#ff8a29'
    },
  ]

  const [member, setMember] = useState([])

  const addMember = (member) => {
    console.log(member)
  }
  return (
    <div className="App">
      <Banner/>
      <Form newMember={member => addMember(member)} />
      <Team name="Jiu-Jitsu"/>
      <Team name="Capoeira"/>
      <Team name="Box"/>
    </div>
  );
}

export default App;
