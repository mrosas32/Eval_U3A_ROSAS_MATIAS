import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ModalProducto from "./ModalProducto";

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/", {
      headers: {
        Authorization: "Bearer ipss.get"
      }
    })
      .then(res => res.json())
      .then(data => {
        const productos = Array.isArray(data.data?.productos) ? data.data.productos : [];
        setProducts(productos);
      })
      .catch(err => {
        console.error("Error cargando productos:", err);
        setError("No se pudieron cargar los productos.");
      })
      .finally(() => setLoading(false));
  }, []);

  const manejarContacto = (productoNombre) => {
    window.location.href = `/#contacto?producto=${encodeURIComponent(productoNombre)}`;
  };

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <section id="productos" className="py-5 bg-light">
      <div className="container-fluid">
        <h2 className="mb-4 text-center">Nuestros Productos</h2>
        <div className="row justify-content-center">
          {products.map((producto, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <ProductCard
                img={producto.imgs?.[0]}
                title={producto.nombre}
                description={producto.descripcion}
                price={producto.precio}
                onClick={() => manejarContacto(producto.nombre)}
              />
            </div>
          ))}
        </div>
      </div>
      <ModalProducto producto={productoSeleccionado} onClose={() => setProductoSeleccionado(null)} />
    </section>
  );
}
