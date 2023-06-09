import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Nosotros from "./Pages/Nosotros";
import PaginaNoEncontrada from "./Pages/PaginaNoEncontrada";
import Tienda from "./Pages/Tienda";
import "./Styles/App.css";

import { BrowserRouter as Router, 
         Routes as Rutas,
         Route  as Ruta }
 from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
        
        <Rutas>
            <Ruta path="/" element={<Home />}></Ruta>
            <Ruta path="/nosotros" element={<Nosotros />}></Ruta>
            <Ruta path="/tienda" element={<Tienda />}></Ruta>
            <Ruta path="*" element={<PaginaNoEncontrada />}></Ruta>
          </Rutas>
       
       
        <Footer></Footer>
    </Router>
  );
}

export default App;
