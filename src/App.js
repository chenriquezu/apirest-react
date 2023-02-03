import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyApi from './components/myapi';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {
  return (
    <div className = "App container">
      <Header
             titulo = "Sismologia  15 Ultimos Movimiento"
      />
      <MyApi
         subtitulo = "Busqueda Por Hora Sismo"      
       />
  
     <Footer
        description = "@ 2023 Sismologia Nacional Todos los derechos reservados."
     />    
    </div>


  );
}

export default App;
