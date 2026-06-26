const perfil = {
  informacion: {
    nombre: "Paula Andrea Cruz Lozano",
    titulo: "Desarrolladora Fullstack",
    ubicacion: "Colombia",
    linkedin: "https://www.linkedin.com/in/paulacruzlozano",
    github: "https://github.com/paulac123",
    whatsapp: "https://wa.me/573184990091",
    url: "",
  },

  perfilProfesional:
    "Desarrolladora Fullstack con capacidad para construir productos web completos, desde APIs robustas con Node.js y Express hasta interfaces dinámicas con React y Tailwind. Experiencia en bases de datos relacionales, autenticación, gestión de inventario en tiempo real y despliegue en plataformas cloud como AWS, Render y Vercel. Con experiencia en Technical Support, operaciones y automatización, atención L1 y L2, gestión de plantillas HSM para WhatsApp/META, automatizaciones en Zoho Desk (Custom Functions, Workflows, Zia Agents) y análisis de métricas para informes ejecutivos, lo que me da un conocimiento completo del ciclo de desarrollo y operación.",

  trabajoActual:
    "Ingeniería de Software — ApifyCloud : Desarrollo y automatización de sistemas de soporte inteligente sobre Zoho Desk, implementando funciones en Deluge con integración a APIs REST y base de conocimiento. Participación en el desarrollo y mantenimiento del backend de CampaignManager (Node.js), incluyendo diagnóstico de errores en producción, gestión de bases de datos MySQL y análisis de logs en entornos Linux. Integración con plataformas externas como Gupshup, META WhatsApp Business API y Genesys Cloud.",

  competencias: {
    backend: "Node.js | Express | TypeScript",
    frontend: "React | Tailwind | HTML | CSS",
    bases_de_datos: "PostgreSQL | MySQL | MariaDB",
    devops: "Docker | Git | GitHub | AWS | Azure | Render | Vercel | mi.com.co",
    herramientas_soporte: "Zoho Desk | Zoho CRM",
    testing: "Jest | Postman",
    marketing: "Meta Ads | Google Analytics | Gestión de Redes Sociales",
  },


  experienciaProfesional: [
    {
      modalidad: "Freelance",
      ubicacion: "Cali, Colombia",
      rol: "Desarrolladora Fullstack",
      stack: "Node.js | Express | React | PostgreSQL | Supabase | Vercel | Vite | GitHub | Jest | JWT",
      dificultad: "En un inicio se manejó la base de datos con Postgres de Render, pero al entrar en suspensión y volver a iniciar se demoraba 32s en cargar. Por ello, decidí realizar la migración a Supabase, lo que optimizó el tiempo de respuesta a 3s.",
      periodo: "2023 – 2025",
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
