interface Translation {
  nav: {
    howItWorks: string;
    services: string;
    benefits: string;
    scheduling: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    scheduleDemo: string;
  };
  howItWorks: {
    title: string;
    steps: {
      record: {
        title: string;
        description: string;
      };
      analyze: {
        title: string;
        description: string;
      };
      validate: {
        title: string;
        description: string;
      };
    };
  };
  services: {
    title: string;
    standard: {
      title: string;
      features: string[];
    };
    postEvent: {
      title: string;
      features: string[];
    };
    express: {
      title: string;
      features: string[];
    };
    button: string;
  };
  benefits: {
    title: string;
    items: {
      quality: {
        title: string;
        description: string;
      };
      time: {
        title: string;
        description: string;
      };
      ratings: {
        title: string;
        description: string;
      };
      history: {
        title: string;
        description: string;
      };
    };
  };
  scheduling: {
    title: string;
    form: {
      name: string;
      email: string;
      phone: string;
      date: string;
      time: string;
      propertyType: string;
      notes: string;
      button: string;
    };
    timeOptions: {
      morning: string;
      afternoon: string;
      evening: string;
    };
    propertyOptions: {
      apartment: string;
      house: string;
      flat: string;
      other: string;
    };
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
  footer: {
    terms: string;
    privacy: string;
    contact: string;
    rights: string;
  };
}

export const translations: { [key: string]: Translation } = {
  en: {
    nav: {
      howItWorks: "How It Works",
      services: "Services",
      benefits: "Benefits",
      scheduling: "Schedule",
      contact: "Contact",
    },
    hero: {
      title: "Smart Cleaning Validation for your Airbnb",
      subtitle: "Use artificial intelligence to ensure your property is spotless for the next guest.",
      scheduleDemo: "Schedule Demo",
    },
    howItWorks: {
      title: "How It Works",
      steps: {
        record: {
          title: "Record the Space",
          description: "After cleaning, make a quick video showing all areas of the property.",
        },
        analyze: {
          title: "AI Analysis",
          description: "Our AI compares with the established standard and identifies potential issues.",
        },
        validate: {
          title: "Instant Validation",
          description: "Receive a detailed report and confirmation of cleaning quality.",
        },
      },
    },
    services: {
      title: "Professional Cleaning Services",
      standard: {
        title: "Standard Cleaning",
        features: [
          "Complete cleaning of all rooms",
          "Bed and bath linen change",
          "AI validation included",
        ],
      },
      postEvent: {
        title: "Post-Event Cleaning",
        features: [
          "Specialized deep cleaning",
          "Stain and odor removal",
          "Detailed report with photos",
        ],
      },
      express: {
        title: "Express Cleaning",
        features: [
          "Quick cleaning between guests",
          "Ready in up to 2 hours",
          "Essential items verification",
        ],
      },
      button: "Book Service",
    },
    benefits: {
      title: "Benefits",
      items: {
        quality: {
          title: "Quality Guarantee",
          description: "Ensure your property always meets the highest cleaning standards.",
        },
        time: {
          title: "Time Savings",
          description: "Eliminate the need for in-person inspections with automated validation.",
        },
        ratings: {
          title: "Better Ratings",
          description: "Maintain high ratings with consistently excellent cleaning.",
        },
        history: {
          title: "Complete History",
          description: "Keep a detailed record of all cleanings and validations.",
        },
      },
    },
    scheduling: {
      title: "Schedule an Assessment",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        date: "Preferred Date",
        time: "Preferred Time",
        propertyType: "Property Type",
        notes: "Notes",
        button: "Schedule Assessment",
      },
      timeOptions: {
        morning: "Morning (8am - 12pm)",
        afternoon: "Afternoon (1pm - 5pm)",
        evening: "Evening (6pm - 10pm)",
      },
      propertyOptions: {
        apartment: "Apartment",
        house: "House",
        flat: "Flat",
        other: "Other",
      },
    },
    cta: {
      title: "Start using AirCleanB today",
      subtitle: "Transform your Airbnb cleaning management with cutting-edge technology",
      button: "Schedule Demo",
    },
    footer: {
      terms: "Terms",
      privacy: "Privacy",
      contact: "Contact",
      rights: "© 2024 AirCleanB. All rights reserved.",
    },
  },
  pt: {
    nav: {
      howItWorks: "Como Funciona",
      services: "Serviços",
      benefits: "Benefícios",
      scheduling: "Agendamento",
      contact: "Contato",
    },
    hero: {
      title: "Validação Inteligente de Limpeza para seu Airbnb",
      subtitle: "Use inteligência artificial para garantir que seu imóvel esteja impecável para o próximo hóspede.",
      scheduleDemo: "Agendar Demo",
    },
    howItWorks: {
      title: "Como Funciona",
      steps: {
        record: {
          title: "Filme o Ambiente",
          description: "Após a limpeza, faça um vídeo rápido mostrando todos os ambientes do imóvel.",
        },
        analyze: {
          title: "IA Analisa",
          description: "Nossa IA compara com o padrão estabelecido e identifica possíveis problemas.",
        },
        validate: {
          title: "Validação Instantânea",
          description: "Receba um relatório detalhado e confirmação da qualidade da limpeza.",
        },
      },
    },
    services: {
      title: "Serviços de Limpeza Profissional",
      standard: {
        title: "Limpeza Padrão",
        features: [
          "Limpeza completa de todos os cômodos",
          "Troca de roupas de cama e banho",
          "Validação por IA inclusa",
        ],
      },
      postEvent: {
        title: "Limpeza Pós-Evento",
        features: [
          "Limpeza profunda especializada",
          "Remoção de manchas e odores",
          "Relatório detalhado com fotos",
        ],
      },
      express: {
        title: "Limpeza Express",
        features: [
          "Limpeza rápida entre hóspedes",
          "Pronto em até 2 horas",
          "Verificação de itens essenciais",
        ],
      },
      button: "Contratar Serviço",
    },
    benefits: {
      title: "Benefícios",
      items: {
        quality: {
          title: "Garantia de Qualidade",
          description: "Tenha certeza que seu imóvel está sempre nos padrões mais altos de limpeza.",
        },
        time: {
          title: "Economia de Tempo",
          description: "Elimine a necessidade de inspeções presenciais com validação automatizada.",
        },
        ratings: {
          title: "Melhores Avaliações",
          description: "Mantenha altas classificações com limpeza consistentemente excelente.",
        },
        history: {
          title: "Histórico Completo",
          description: "Mantenha um registro detalhado de todas as limpezas e validações.",
        },
      },
    },
    scheduling: {
      title: "Agende uma Avaliação",
      form: {
        name: "Nome",
        email: "Email",
        phone: "Telefone",
        date: "Data Preferida",
        time: "Horário Preferido",
        propertyType: "Tipo de Imóvel",
        notes: "Observações",
        button: "Agendar Avaliação",
      },
      timeOptions: {
        morning: "Manhã (8h - 12h)",
        afternoon: "Tarde (13h - 17h)",
        evening: "Noite (18h - 22h)",
      },
      propertyOptions: {
        apartment: "Apartamento",
        house: "Casa",
        flat: "Flat",
        other: "Outro",
      },
    },
    cta: {
      title: "Comece a usar AirCleanB hoje mesmo",
      subtitle: "Transforme a gestão de limpeza do seu Airbnb com tecnologia de ponta",
      button: "Agendar Demonstração",
    },
    footer: {
      terms: "Termos",
      privacy: "Privacidade",
      contact: "Contato",
      rights: "© 2024 AirCleanB. Todos os direitos reservados.",
    },
  },
  es: {
    nav: {
      howItWorks: "Cómo Funciona",
      services: "Servicios",
      benefits: "Beneficios",
      scheduling: "Agendar",
      contact: "Contacto",
    },
    hero: {
      title: "Validación Inteligente de Limpieza para tu Airbnb",
      subtitle: "Usa inteligencia artificial para asegurar que tu propiedad esté impecable para el próximo huésped.",
      scheduleDemo: "Agendar Demo",
    },
    howItWorks: {
      title: "Cómo Funciona",
      steps: {
        record: {
          title: "Graba el Espacio",
          description: "Después de la limpieza, haz un video rápido mostrando todas las áreas de la propiedad.",
        },
        analyze: {
          title: "IA Analiza",
          description: "Nuestra IA compara con el estándar establecido e identifica posibles problemas.",
        },
        validate: {
          title: "Validación Instantánea",
          description: "Recibe un informe detallado y confirmación de la calidad de limpieza.",
        },
      },
    },
    services: {
      title: "Servicios de Limpieza Profesional",
      standard: {
        title: "Limpieza Estándar",
        features: [
          "Limpieza completa de todas las habitaciones",
          "Cambio de ropa de cama y baño",
          "Validación por IA incluida",
        ],
      },
      postEvent: {
        title: "Limpieza Post-Evento",
        features: [
          "Limpieza profunda especializada",
          "Eliminación de manchas y olores",
          "Informe detallado con fotos",
        ],
      },
      express: {
        title: "Limpieza Express",
        features: [
          "Limpieza rápida entre huéspedes",
          "Listo en hasta 2 horas",
          "Verificación de elementos esenciales",
        ],
      },
      button: "Contratar Servicio",
    },
    benefits: {
      title: "Beneficios",
      items: {
        quality: {
          title: "Garantía de Calidad",
          description: "Asegúrate de que tu propiedad siempre cumpla con los más altos estándares de limpieza.",
        },
        time: {
          title: "Ahorro de Tiempo",
          description: "Elimina la necesidad de inspecciones presenciales con validación automatizada.",
        },
        ratings: {
          title: "Mejores Calificaciones",
          description: "Mantén altas calificaciones con limpieza consistentemente excelente.",
        },
        history: {
          title: "Historial Completo",
          description: "Mantén un registro detallado de todas las limpiezas y validaciones.",
        },
      },
    },
    scheduling: {
      title: "Agenda una Evaluación",
      form: {
        name: "Nombre",
        email: "Email",
        phone: "Teléfono",
        date: "Fecha Preferida",
        time: "Horario Preferido",
        propertyType: "Tipo de Propiedad",
        notes: "Observaciones",
        button: "Agendar Evaluación",
      },
      timeOptions: {
        morning: "Mañana (8h - 12h)",
        afternoon: "Tarde (13h - 17h)",
        evening: "Noche (18h - 22h)",
      },
      propertyOptions: {
        apartment: "Apartamento",
        house: "Casa",
        flat: "Flat",
        other: "Otro",
      },
    },
    cta: {
      title: "Empieza a usar AirCleanB hoy mismo",
      subtitle: "Transforma la gestión de limpieza de tu Airbnb con tecnología de punta",
      button: "Agendar Demostración",
    },
    footer: {
      terms: "Términos",
      privacy: "Privacidad",
      contact: "Contacto",
      rights: "© 2024 AirCleanB. Todos los derechos reservados.",
    },
  },
};
