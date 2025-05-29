const ProductCard = ({ img, title, description, price, onClick }) => {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={title} loading="lazy" style={{ height: "200px", objectFit: "cover" }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted small">{description.slice(0, 100)}...</p>
        <p className="fw-bold text-primary">${price?.toLocaleString() || "N/A"}</p>
        <button onClick={() => onClick(title)} className="btn btn-outline-primary mt-auto">Contáctanos</button>
      </div>
    </div>
  );
};

export default ProductCard;
