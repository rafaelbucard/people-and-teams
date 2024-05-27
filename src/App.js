import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {

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
