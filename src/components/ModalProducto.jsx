export default function ModalProducto({ producto, onClose }) {
  if (!producto) return null; 

  const { nombre, descripcion, precio, imgs } = producto;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{nombre}</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <img src={imgs?.[0]} alt={nombre} className="img-fluid mb-3" />
            <p>{descripcion}</p>
            <p className="fw-bold text-primary">${precio?.toLocaleString() || "N/A"}</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
