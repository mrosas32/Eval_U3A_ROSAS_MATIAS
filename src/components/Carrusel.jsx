export default function Carrusel() {
  return (
    <div id="carruselProductos" className="carousel slide position-relative mb-5" data-bs-ride="carousel">
      {}
      <div className="position-absolute top-50 start-50 translate-middle text-white text-center z-3">
        <h2 className="bg-dark bg-opacity-50 p-3 rounded">
          "Tejiendo comunidad con cada hilo"
        </h2>
      </div>

      <div className="carousel-inner" style={{ maxHeight: '400px', overflow: 'hidden' }}>
        <div className="carousel-item active">
          <img src="/img/carrusel1.jpg" className="d-block w-100" style={{ objectFit: 'cover', height: '400px' }} alt="Producto 1" />
        </div>
        <div className="carousel-item">
          <img src="/img/carrusel2.jpg" className="d-block w-100" style={{ objectFit: 'cover', height: '400px' }} alt="Producto 2" />
        </div>
        <div className="carousel-item">
          <img src="/img/carrusel3.jpg" className="d-block w-100" style={{ objectFit: 'cover', height: '400px' }} alt="Producto 3" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carruselProductos" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carruselProductos" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
}
