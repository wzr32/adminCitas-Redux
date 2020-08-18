import React from 'react';
import AgregarCitas from './components/AgregarCita';
import ListadoCitas from './components/ListadoCitas';
//redux
import store from './store';
import { Provider } from 'react-redux';



const App = () => {
  return(
    <Provider store={store}>
      <div className="container">
        <header>
          <h1 className="text-center">Administracion de pacientes de Veterinaria - REDUX</h1>
        </header>

        <div className="row mt-3">
          <div className="col-md-6">
            <AgregarCitas />
          </div>
          <div className="col-md-6">
            <ListadoCitas />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App;
