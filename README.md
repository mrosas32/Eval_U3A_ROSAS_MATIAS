
# Proyecto Tejelanas Vivi

Este es el proyecto que desarrollé para la evaluación de la Unidad 3 del ramo Desarrollo Frontend. Se basa en una tienda ficticia llamada "Tejelanas Vivi", dedicada al tejido y la artesanía, y el objetivo era crear una página web que mostrara información de manera clara, ordenada y que también permitiera interactuar con los datos.

## ¿Qué incluye este proyecto?

La página cuenta con varias secciones principales:

- Quiénes somos
- Productos y servicios
- Preguntas frecuentes
- Formulario de contacto

Toda la información se carga desde una API externa, por lo que no hay datos escritos directamente en el código, sino que se consumen con fetch usando un token de autorización tipo Bearer.

## Tecnologías que usé

- React
- Bootstrap
- HTML + JSX
- CSS
- Fetch API
- Autenticación con Bearer Token (ipss.get)


## Características principales

- Los datos (productos, servicios, quiénes somos, etc.) se cargan desde endpoints protegidos con token.
- El formulario de contacto valida que los campos estén completos y bien escritos. Si todo está bien, se simula el envío con un alert y un console.log.
- Está dividido en componentes reutilizables, lo que ayuda a mantener el código más claro.
- Hay retroalimentación visual mientras se cargan los datos o si algo falla.
- Los botones de "Contáctanos" rellenan automáticamente el producto en el formulario.
- Las imágenes usan carga lenta para mejorar el rendimiento.
- Traté de cuidar que el sitio sea fácil de usar y entender.


## Seguridad

Todas las solicitudes de datos se hacen con el encabezado Authorization y el token que se pidió en la evaluación. Esto asegura que solo se accede a los datos si se tiene el permiso correcto.


## Cómo probar el formulario

El formulario de contacto no envía datos reales, pero muestra un mensaje de éxito simulado. Así se demuestra que funciona, sin necesidad de tener backend.


## Estructura general del proyecto

src/
├── components/
│   ├── AboutSection.jsx
│   ├── ProductsSection.jsx
│   ├── Contacto.jsx
│   └── ...
├── App.jsx
└── main.jsx


## Para ejecutarlo en local

1. Tener Node.js instalado
2. Clonar el proyecto
3. Ejecutar estos comandos:

npm install
npm run dev

