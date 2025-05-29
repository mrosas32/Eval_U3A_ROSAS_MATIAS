import Carrusel from "./components/Carrusel";
import AboutSection from "./components/AboutSection";
import ProductsSection from "./components/ProductsSection";
import FAQSection from "./components/FAQSection";
import Contacto from "./components/Contacto";
import ServicesSection from "./components/ServicesSection";


function App() {
  return (

    
    <>

    
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        

        <div className="container">
          <a className="navbar-brand" href="#">Tejelanas Vivi</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#quienes-somos">Quiénes Somos</a></li>
              <li className="nav-item"><a className="nav-link" href="#productos">Productos</a></li>
              <li className="nav-item"><a className="nav-link" href="#faq">FAQ</a></li>
              <li className="nav-item"><a className="nav-link" href="#contacto">Contacto</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
    
        <Carrusel />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <FAQSection />
        <Contacto />
      </main>

      <footer className="bg-dark text-white text-center py-3">
        <small>© 2025 Tejelanas Vivi - Todos los derechos reservados.</small>
      </footer>
    </>
  );
}

export default App;