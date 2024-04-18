import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Form/>
      <Team name="Jiu-Jitsu"/>
      <Team name="Capoeira"/>
      <Team name="Box"/>
    </div>
  );
}

export default App;
