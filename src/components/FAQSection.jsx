import { useEffect, useState } from "react";

export default function FAQSection() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetch("https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/", {
      headers: {
        Authorization: "Bearer ipss.get"
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("🧠 FAQ:", data);
        const lista = Array.isArray(data.data) ? data.data : [];
        setFaqs(lista);
      })
      .catch(err => console.error("Error cargando preguntas frecuentes:", err));
  }, []);

  return (
    <section id="faq" className="py-5 bg-light">
      <div className="container">
        <h2 className="mb-4">Preguntas Frecuentes</h2>
        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.titulo}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.respuesta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
