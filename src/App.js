import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {

  const [member, setMember] = useState([])

  const addMember = (member) => {
    console.log(member)
  }
  return (
    <div className="App">
      <Banner/>
      <Form newMember={member => addMember(member)} />
    </div>
  );
}

export default App;
