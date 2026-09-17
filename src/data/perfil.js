const perfil = {
  informacion: {
    nombre: "Paula Andrea Cruz Lozano",
    titulo: "Desarrolladora Fullstack",
    ubicacion: "Colombia",
    eslogan: "Voy con toda, soy una leona y tengo hambre.",
    notaPortafolio:
      "Este portafolio (Node.js + React/Vite, desplegado en AWS).",
    historia:
      "Vengo del mundo del comercio y el marketing digital. En algún momento decidí darle un giro a mi vida y estudiar desarrollo web — y no me arrepiento ni un segundo. Amo lo que hago porque siento que tengo el poder de una varita mágica en mi teclado: puedo crear lo que se me ocurra.",
    linkedin: "https://www.linkedin.com/in/paulacruzlozano",
    github: "https://github.com/paulac123",
    whatsapp: "https://wa.me/573184990091",
    url: "",
  },

  perfilProfesional:
    "Desarrolladora Fullstack construyo aplicaciones web completas  backend en Node.js, Express y PHP/Symfony; frontend en React y Vue.js; bases de datos relacionales (MySQL, PostgreSQL) y las despliego en AWS, Render y Vercel con Docker. Trabajo con herramientas de IA generativa (Claude Code) para acelerar el desarrollo, dirigiendo requisitos y decisiones de arquitectura. Mi diferencial: experiencia real diagnosticando y corrigiendo errores en producción, no solo en local.",

  competencias: {
    backend: "Node.js | Express | TypeScript | PHP | Symfony | Doctrine ORM",
    frontend: "React | Tailwind | HTML | CSS | Vue.js",
    bases_de_datos: "PostgreSQL | MySQL | MariaDB",
    devops: "Docker | Git | GitHub | AWS | Azure | Render | Vercel | mi.com.co",
    herramientas_soporte: "Zoho Desk | Zoho CRM",
    testing: "Jest | Postman",
    marketing: "Meta Ads | Google Analytics | Gestión de Redes Sociales",
  },


  experienciaProfesional: [
    {
      modalidad: "Freelance",
      ubicacion: "Remoto",
      rol: "Desarrolladora Fullstack",
      stack: "Vue.js | TypeScript | Pinia | PHP | Symfony | Doctrine ORM | MySQL | ECharts",
      dificultad: "Los endpoints de lectura para el módulo de Estadísticas no existían en el backend, así que diseñé los nuevos siguiendo la convención del equipo. En el mapa mundial apareció un bug real de corte de antimeridiano (dos líneas fijas atravesando el mapa); en vez de parchearlo a mano, lo resolví reemplazando la librería por @geo-maps.",
      periodo: "2026",
      url: "",
      imagen: "",
      proyectos: [
        {
          cliente: "Tidelit — Plataforma de streaming musical",
          url: "",
          imagen: "",
          logros: [
            "Diseñé y construí, de punta a punta, los endpoints (Symfony/Doctrine) y componentes Vue de un módulo de Estadísticas con dos vistas — Oyente y Artista — incluyendo Top 5, tendencias, KPIs y filtros avanzados de ubicación, optimizando con índices y consultas pensadas para escala.",
            "Elegí ECharts para las gráficas y el mapa mundial choropleth de reproducciones por país, y diagnostiqué/corregí un bug real de renderizado del mapa cambiando de librería en vez de parchear a mano.",
            "Implementé el sistema visual de marca del módulo (degradados morado-azul-cian, tarjetas KPI, mapa choropleth), siguiendo el diseño validado por el equipo de producto.",
          ],
        },
      ],
    },
    {
      empresa: "ApifyCloud",
      modalidad: "Contractor",
      Ubicacion: "Remoto",
      rol: "Desarrolladora de Software",
      stack: "Node.js | MySQL | Deluge (Zoho) | JavaScript | Linux | PM2",
      periodo: "Enero – Septiembre 2026",
      url: "",
      imagen: "",
      descripcion: "Plataforma de integraciones y automatización (WhatsApp Business API, Zoho Desk, Genesys Cloud) para atención al cliente empresarial.",
      logros: [
        "Hablé con clientes y empresas para levantar requerimientos de desarrollo, capacité personal en el manejo de la aplicación, y participé en reuniones de resolución de incidentes.",
        "Diagnostiqué y corregí en producción distintos tipos de errores, entre ellos consultas SQL sin límite que causaban caídas recurrentes del servidor (502) y bugs de redirección en código frontend compilado — editando el código fuente directamente y verificando cada fix con logs y pruebas reales.",
        "Identifiqué y corregí una vulnerabilidad de seguridad en la configuración de acceso de algunos clientes, coordinando el redespliegue de la corrección en producción.",
        "Desarrollé automatizaciones e integraciones con APIs REST (Custom Functions en Deluge) sobre Zoho Desk.",
      ],
    },
    {
      modalidad: "Freelance",
      ubicacion: "Cali, Colombia",
      rol: "Desarrolladora Fullstack",
      stack: "Node.js | Express | React | PostgreSQL | Supabase | Vercel | Vite | GitHub | Jest | JWT",
      dificultad: "En un inicio se manejó la base de datos con Postgres de Render, pero al entrar en suspensión y volver a iniciar se demoraba 32s en cargar. Por ello, decidí realizar la migración a Supabase, lo que optimizó el tiempo de respuesta a 3s.",
      periodo: "2023 – 2024",
      url: "",
      imagen: "",
      proyectos: [
        {
          cliente: "Restaurante Burger station",
          url: "https://fronted-burger-station.vercel.app/",
          imagen: "https://multimedia-paula.s3.us-east-2.amazonaws.com/burger.jpg",
          logros: [
            "Desarrollé un e-commerce completo con carrito de compras, procesamiento de pedidos y catálogo de productos.",
            "Implementé gestión de inventario en tiempo real, descontando stock automáticamente por cada venta registrada.",
            "Diseñé panel administrativo para control de productos, pedidos y niveles de stock con alertas de agotamiento.",
          ],
        },
        {
          cliente: "Natural Greatness",
          url: "https://naturalgreatness.com.co/",
          periodo: "2025",
          imagen: "https://multimedia-paula.s3.us-east-2.amazonaws.com/natural.jpg",
          stack: "React | TypeScript | Vite | Tailwind CSS | PapaParse | mi.com.co",
          dificultad: "El cliente requería que el despliegue se realizara exclusivamente en su proveedor de hosting mi.com.co, donde no habían logrado subir la aplicación previamente. Logré configurar el build y adaptar el proyecto para que funcionara a la perfección en esta infraestructura compartida.",
          logros: [
            "Creé un catálogo digital de alto impacto que combina diseño premium con funcionalidad inteligente.",
            "Implementé integración directa con Google Sheets, permitiendo al cliente actualizar productos en tiempo real sin código.",
            "Diseñé una solución escalable y sin costos adicionales que no requiere experiencia técnica del cliente.",
          ],
        },
        {
          cliente: "Distribuidora de Aseo",
          periodo: "2024",
          url: "",
          imagen: "",
          stack: "React | Node.js | Express | TypeScript | Vite | MySQL | Docker | JWT | Tailwind CSS",
          dificultad: "Lograr digitalizar toda la información que se manejaba manualmente y resguardar la seguridad de los datos. Para ello, se implementó un sistema de acceso por roles y autenticación con JWT.",
          logros: [
            "Desarrollé un sistema ERP tipo comercial para la administración integral de productos y recursos.",
            "Optimicé los procesos internos, mejorando la toma de decisiones estratégicas en un 70%.",
          ],
        },
      ],
    },
    {
      empresa: "Tallas Grandes Cali",
      rol: "Fundadora y Gestora",
      periodo: "2018 – 2023",
      url: "",
      imagen: "https://multimedia-paula.s3.us-east-2.amazonaws.com/logotallas.jpg",
      descripcion:
        "Tienda de ropa y marca propia para mujeres de talla grande.",
      logros: [
        "Creación de identidad digital y posicionamiento en redes sociales.",
        "Implementación de sistemas administrativos escalables.",
        "Uso de PostgreSQL, Google Analytics y Meta Ads.",
      ],
    },
  ],

  educacion: [
    {
      titulo: "Desarrolladora Fullstack",
      institucion: "Platzi",
      modalidad: "En línea",
      descripcion: "Más de 50 cursos completados en desarrollo de software.",
      url: "",
    },
    {
      titulo: "Tecnóloga en Publicidad y Mercadeo",
      institucion: "Politécnico Superior de Occidente",
      url: "",
    },
  ],
};

module.exports = perfil;
