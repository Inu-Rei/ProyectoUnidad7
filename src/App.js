import React from 'react'; 
import { Routes, Route } from 'react-router-dom';
import Login from './componentes/login';
import Detail from './componentes/Detail';
import Listado from './componentes/Listado';


function App () {
  return(
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/Listado' element={<Listado/>} />
      <Route path='/personaje/:nombre/:edad/:procedencia/:imagen3/:sexo/:fechaDeNacimiento/:origen/:primeraAparicion/:funsion/:manga/:anime/:estatura/:peso/:ocupacion/:familia/:kiki/:lugarDeEntrenamiento/:habilidades/:constelacion/:tecnicas/:imagen4' element={<Detail/>} />
    </Routes>
  );
}

export default App;