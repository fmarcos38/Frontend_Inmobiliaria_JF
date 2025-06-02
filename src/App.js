import { Route, Routes } from 'react-router-dom';
import { InmobiliariaProvider } from './context';
import Navbar from './componentes/Navbar';
import Home from './paginas/Home';
import LoginPage from './paginas/Login';
import Footbar from './componentes/Footbar';
import PropsVenta from './paginas/PropsVenta';
import PropsAlquiler from './paginas/PropsAlquiler';
import NosotrosPage from './paginas/Nosotros';
import DetalleProp from './paginas/DetallePropiedad';
import FavoritosPage from './paginas/Favoritos';
import CreaPropiedad from './paginas/CreaPropiedad';
import ListaPropsAdminPage from './paginas/ListaProspAdminPage';
import EditaPropiedad from './paginas/EditaPropiedad';
import ContactoPAntallaCH from './componentes/ContactoPantallaCH';
import AltaUsuarioPage from './paginas/AltaUsuario';
import ListaUsuariosPage from './paginas/ListaUsuariosPage';
import EditaUsuarioPage from './paginas/EditaUsuario';
import './App.css';


function App() {

  return (
    <InmobiliariaProvider>
      <div className="App">
        {/*--------- navbar------ */}
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/venta' element={<PropsVenta/>} />
          <Route path='/alquiler' element={<PropsAlquiler />} />
          <Route path='/nosotros' element={<NosotrosPage/>} />
          <Route path='/contacto' element={<ContactoPAntallaCH/>} />
          <Route path='/detalle/:id' element={<DetalleProp/>} />
          <Route path='/favoritos' element={<FavoritosPage/>} />
          {/* rutas para Admin */}
          <Route path='/admin/creaPropiedad' element={<CreaPropiedad />} />
          <Route path='/admin/listaPropsAdmin' element={<ListaPropsAdminPage />} />
          <Route path='admin/editaProp/:_id' element={<EditaPropiedad />} />
          <Route path='/admin/creaUsuario' element={<AltaUsuarioPage />} />
          <Route path='/admin/listaUsuarios' element={<ListaUsuariosPage />} />
          <Route path='/admin/editaUsuario/:_id' element={<EditaUsuarioPage />} />
          
          <Route path='*' element={<Home />} />
        </Routes>

        <Footbar />
      </div>
    </InmobiliariaProvider>
  );
}

export default App;

