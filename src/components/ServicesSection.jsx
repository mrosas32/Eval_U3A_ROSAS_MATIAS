import { useEffect, useState } from "react";

export default function ServicesSection() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/", {
      headers: {
        Authorization: "Bearer ipss.get",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const servicios = Array.isArray(data.data?.servicios) ? data.data.servicios : [];
        setServices(servicios);
        console.log("🧶 Servicios cargados:", servicios);
      })
      .catch((err) => console.error("Error al cargar servicios:", err));
  }, []);

  return (
    <section id="servicios" className="py-5 bg-white">
      <div className="container">
        <h2 className="mb-4 text-center">Nuestros Servicios</h2>
        <div className="row justify-content-center">
          {services.map((servicio, index) => (
            <div className="col-md-6 col-lg-4 mb-4 d-flex" key={index}>
              <div className="card h-100 shadow-sm w-100">
                {servicio.imgs && servicio.imgs[0] && (
                  <img
                    src={servicio.imgs[0]}
                    alt={servicio.nombre}
                    className="card-img-top"
                    style={{ objectFit: "cover", height: "200px" }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{servicio.nombre}</h5>
                  <p className="card-text mb-1"><strong>Fecha:</strong> {servicio.fecha}</p>
                  <p className="card-text mb-1"><strong>Ubicación:</strong> {servicio.ubicacion}</p>
                  <p className="card-text"><strong>Cupos disponibles:</strong> {servicio.cupos}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
