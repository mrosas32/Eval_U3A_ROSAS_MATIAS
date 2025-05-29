import { useEffect, useState } from "react";

export default function AboutSection() {
  const [info, setInfo] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/", {
      headers: {
        Authorization: "Bearer ipss.get"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("🔍 About:", data);
        setInfo(data.data || "");
      })
      .catch(err => {
        console.error("❌ Error cargando datos:", err);
        setError("Error al cargar la información.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;

  return (
    <section id="quienes-somos" className="py-5">
      <div className="container">
        <h2 className="mb-4">¿Quiénes Somos?</h2>
        <p>{info}</p>
      </div>
    </section>
  );
}
