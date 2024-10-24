
import './App.css';
import Navbar from './componentes/Navbar';
import { InmobiliariaProvider } from './context';

function App() {
  return (
    <InmobiliariaProvider>
      <div className="App">
        <Navbar/>
        pepe
      </div>
    </InmobiliariaProvider>
  );
}

export default App;
