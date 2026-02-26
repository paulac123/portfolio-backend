const perfil = {
  informacion: {
    nombre: "Paula Andrea Cruz Lozano",
    titulo: "Desarrolladora Fullstack",
    ubicacion: "Colombia",
    linkedin: "https://www.linkedin.com/in/paulacruzlozano",
    github: "https://github.com/paulac123",
  },

  perfilProfesional:
    "Desarrolladora Fullstack con experiencia en el desarrollo de aplicaciones web modernas utilizando React, Node.js y bases de datos relacionales. Especializada en APIs REST, visualización de datos. Además cuento con experiencia en marketing digital y gestión de marca, lo que me permite integrar tecnología y visión de negocio.",

  competencias: {
    backend: "Node.js | Express | TypeScript",
    frontend: "React | Tailwind | HTML | CSS",
    bases_de_datos: "PostgreSQL | MySQL | MariaDB",
    devops: "Docker | Git | GitHub | AWS | Azure",
    testing: "Jest | Postman",
    marketing: "Meta Ads | Google Analytics | Gestión de Redes Sociales",
  },

  experienciaProfesional: [
    {
      modalidad: "Freelance",
      ubicacion: "Cali, Colombia",
      rol: "Desarrolladora Fullstack",
      periodo: "2023 – 2025",
      proyectos: [
        {
          cliente: "Restaurante Burger station",
          logros: [
            " Desarrollé un e-commerce completo con carrito de compras, procesamiento de pedidos y catálogo de productos.",
            " Implementé gestión de inventario en tiempo real, descontando stock automáticamente por cada venta registrada.",
            " Diseñé panel administrativo para control de productos, pedidos y niveles de stock con alertas de agotamiento.",
          ],
        },

        {
          cliente: "Comercializadora de Productos",
          logros: [
            "Trabaje en la implementacion de un sistema ERP tipo comercial.",
            "Desarrollé backend con TypeScript y Express y frontend con React.",
            "Implementé autenticación, RBAC y gestión de sesiones seguras.",
          ],
        },
      ],
    },
    {
      empresa: "Tallas Grandes Cali",
      rol: "Fundadora y Gestora",
      periodo: "2018 – 2023",
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
    },
    {
      titulo: "Tecnóloga en Publicidad y Mercadeo",
      institucion: "Politécnico Superior de Occidente",
    },
  ],
};

module.exports = perfil;
