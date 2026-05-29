const perfil = {
  informacion: {
    nombre: "Paula Andrea Cruz Lozano",
    titulo: "Desarrolladora Fullstack",
    ubicacion: "Colombia",
    linkedin: "https://www.linkedin.com/in/paulacruzlozano",
    github: "https://github.com/paulac123",
    url: "",
  },

  perfilProfesional:
    "Desarrolladora Fullstack con capacidad para construir productos web completos, desde APIs robustas con Node.js y Express hasta interfaces dinámicas con React y Tailwind. Experiencia en bases de datos relacionales, autenticación, gestión de inventario en tiempo real y despliegue en plataformas cloud como AWS, Render y Vercel. Con experiencia en Technical Support, operaciones y automatización, atención L1 y L2, gestión de plantillas HSM para WhatsApp/META, automatizaciones en Zoho Desk (Custom Functions, Workflows, Zia Agents) y análisis de métricas para informes ejecutivos, lo que me da un conocimiento completo del ciclo de desarrollo y operación.",

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
      periodo: "2023 – 2025",
      url: "",
      imagen: "",
      proyectos: [
        {
          cliente: "Restaurante Burger station",
          url: "https://fronted-burger-station.vercel.app/",
          imagen: "https://multimedia-paula.s3.us-east-2.amazonaws.com/burger.jpg",
          logros: [
            " Desarrollé un e-commerce completo con carrito de compras, procesamiento de pedidos y catálogo de productos.",
            " Implementé gestión de inventario en tiempo real, descontando stock automáticamente por cada venta registrada.",
            " Diseñé panel administrativo para control de productos, pedidos y niveles de stock con alertas de agotamiento.",
          ],
        },
        {
          cliente: "Natural Greatness",
          url: "https://naturalgreatness.com.co/",
          imagen: "https://multimedia-paula.s3.us-east-2.amazonaws.com/natural.jpg",
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
          logros: [
            "Atención de tickets técnicos L1 y L2 en productos.",
            "Creación y gestión de plantillas HSM para canales WhatsApp/META.",
            "Monitoreo de incidencias, revisión de logs y diagnóstico de caídas de servicio.",
            "Desarrollo e implementación de automatizaciones en Zoho Desk con Custom Functions, Workflows y Zia Agents.",
            "Administración de la plataforma CRM Zoho Desk Enterprise y análisis de métricas de soporte para generación de informes ejecutivos por cliente.",
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
