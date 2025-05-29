import { useEffect, useState } from "react";

export default function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    producto: "",
    mensaje: ""
  });

  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const producto = params.get("producto");
    if (producto) {
      setFormulario(prev => ({ ...prev, producto }));
    }
  }, []);

  const validar = () => {
    const nuevosErrores = {};

    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!formulario.email.trim()) {
      nuevosErrores.email = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.email)) {
      nuevosErrores.email = "Formato de correo inválido.";
    }

    if (!formulario.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es obligatorio.";
    }

    return nuevosErrores;
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    const erroresValidados = validar();
    setErrores(erroresValidados);

    if (Object.keys(erroresValidados).length === 0) {
      console.log("📤 Formulario enviado:", formulario);
      alert("¡Tu mensaje fue enviado con éxito!");
      setEnviado(true);
      setFormulario({
        nombre: "",
        email: "",
        producto: "",
        mensaje: ""
      });
    }
  };

  return (
    <section id="contacto" className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-4">Contáctanos</h2>

        {enviado && <div className="alert alert-success">¡Tu mensaje fue enviado exitosamente!</div>}

        <form onSubmit={manejarEnvio} noValidate>
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errores.nombre ? "is-invalid" : ""}`}
              id="nombre"
              value={formulario.nombre}
              onChange={(e) => setFormulario({ ...formulario, nombre: e.target.value })}
            />
            {errores.nombre && <div className="invalid-feedback">{errores.nombre}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className={`form-control ${errores.email ? "is-invalid" : ""}`}
              id="email"
              value={formulario.email}
              onChange={(e) => setFormulario({ ...formulario, email: e.target.value })}
            />
            {errores.email && <div className="invalid-feedback">{errores.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="producto" className="form-label">Producto</label>
            <input
              type="text"
              className="form-control"
              id="producto"
              value={formulario.producto}
              onChange={(e) => setFormulario({ ...formulario, producto: e.target.value })}
              placeholder="Producto de interés"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea
              className={`form-control ${errores.mensaje ? "is-invalid" : ""}`}
              id="mensaje"
              rows="4"
              value={formulario.mensaje}
              onChange={(e) => setFormulario({ ...formulario, mensaje: e.target.value })}
            ></textarea>
            {errores.mensaje && <div className="invalid-feedback">{errores.mensaje}</div>}
          </div>

          <button type="submit" className="btn btn-success">Enviar</button>
        </form>
      </div>
    </section>
  );
}
