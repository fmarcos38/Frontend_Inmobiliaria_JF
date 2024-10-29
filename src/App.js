import { Route, Routes } from 'react-router-dom';
import { InmobiliariaProvider } from './context';
import Navbar from './componentes/Navbar';
import Home from './paginas/Home';
import Footbar from './componentes/Footbar';

import './App.css';
import FormularioContacto from './componentes/formularioContacto';
import Nosotros from './componentes/Nosotros';

function App() {
  return (
    <InmobiliariaProvider>
      <div className="App">
        {/*--------- navbar------ */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<FormularioContacto/>} />
          <Route path='/nosotros' element={<Nosotros/>} />
        </Routes>

        <Footbar />
      </div>
    </InmobiliariaProvider>
  );
}

export default App;

