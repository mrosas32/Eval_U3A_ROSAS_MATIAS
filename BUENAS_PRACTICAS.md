
# Buenas Prácticas que apliqué en este proyecto 🧶

En este proyecto traté de aplicar varias buenas prácticas que he ido aprendiendo durante el ramo y también algunas que me han servido en otras experiencias. Las dejo explicadas con mis palabras, para que se entienda por qué las usé.

---

## 1. Separación de componentes

Desde el comienzo intenté que cada parte del sitio tuviera su propio componente. Por ejemplo, el formulario de contacto, las secciones de productos, y el carrusel están todos separados. Esto me ayudó a mantener el código ordenado y más fácil de modificar sin romper todo.

---

## 2. Validaciones del formulario

El formulario de contacto no solo es visual, también validé que no se pueda enviar vacío. Usé condiciones en React para validar nombre, correo y mensaje. Mostré errores visuales cuando algo no estaba bien y además simulo el envío con un `console.log()` y un `alert()` para que se entienda que funcionaría en un sistema real.

---

## 3. Consumo de datos con seguridad

Los datos que uso vienen de un endpoint que está protegido con Bearer Token (`ipss.get`). Me aseguré de que todas las solicitudes usen correctamente la cabecera de autenticación, ya que esto fue algo que se pidió en la evaluación. También muestro mensajes si hay errores o si los datos están cargando.

---

## 4. Manejo de estado y errores

Para cada componente que consume datos, agregué estados de `loading`, `error` y `datos`. Esto permite dar feedback al usuario (por ejemplo, "Cargando productos..." o "Hubo un error al cargar"). Me parece importante que la interfaz no quede vacía si algo falla.

---

## 5. Imágenes optimizadas

Donde usé imágenes (como en productos y en el carrusel), activé la carga diferida con `loading="lazy"` para que el sitio no cargue todo de golpe. Esto mejora el rendimiento y hace que la carga sea más fluida, especialmente en móviles.

---

## 6. Código limpio y entendible

Evité dejar comentarios innecesarios, usé nombres de variables descriptivos y traté de mantener todo lo más limpio posible. También revisé que no queden archivos o líneas de código que no se estén usando.

---

## 7. Interfaz pensada en el usuario

Usé Bootstrap para dar una estructura ordenada y estilos consistentes. Además, traté de que los textos, botones y formularios sean fáciles de entender y usar, incluso para alguien que no esté familiarizado con el sitio.

---

## 8. Accesibilidad básica

Agregué atributos `alt` en imágenes y etiquetas correctamente asociadas con los `input` del formulario para que sean más accesibles. Sé que aún hay más por mejorar en accesibilidad, pero al menos cubrí lo mínimo necesario.

---

## Conclusión

Estas prácticas me ayudaron a mantener el proyecto más estructurado, claro y funcional. Creo que es importante no solo que el sitio funcione, sino que también sea mantenible, fácil de usar y que se vea profesional sin complicarlo demasiado.

