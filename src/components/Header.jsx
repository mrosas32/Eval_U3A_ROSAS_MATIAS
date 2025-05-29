import React from "react";

export default function Header() {

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      backgroundColor: "#8a4f3d",
      color: "white",
      padding: "1rem",
      position: "sticky",
      top: "0",
      zIndex: "1000"
    }}>
      <h1>Tejelanas Vivi</h1>
      <nav style={{ marginTop: "1rem" }}>
        <button onClick={() => scrollToSection('about')} style={buttonStyle}>Quiénes Somos</button>
        <button onClick={() => scrollToSection('products')} style={buttonStyle}>Productos</button>
        <button onClick={() => scrollToSection('faq')} style={buttonStyle}>FAQs</button>
        <button onClick={() => scrollToSection('contact')} style={buttonStyle}>Contacto</button>
      </nav>
    </header>
  );
}

const buttonStyle = {
  backgroundColor: "#f0e7de",
  color: "#8a4f3d",
  border: "none",
  borderRadius: "5px",
  padding: "0.5rem 1rem",
  marginRight: "0.5rem",
  cursor: "pointer",
  fontWeight: "bold"
};
