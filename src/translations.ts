interface Step {
  title: string;
  description: string;
}

interface Translation {
  nav: {
    howItWorks: string;
    services: string;
    benefits: string;
    scheduling: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    priceFrom: string;
    getQuote: string;
    call: string;
    replyTime: string;
    offerTitle: string;
    offerNote: string;
  };
  howItWorks: {
    title: string;
    steps: {
      register: Step;
      report: Step;
      cleaning: Step;
      record: Step;
      validation: Step;
    };
  };
  services: {
    title: string;
    standard: { title: string; price: string; features: string[] };
    postEvent: { title: string; price: string; features: string[] };
    express: { title: string; price: string; features: string[] };
    alsoAvailable: string;
    alsoAvailableList: string;
    button: string;
  };
  benefits: {
    title: string;
    items: {
      quality: Step;
      time: Step;
      ratings: Step;
      history: Step;
    };
  };
  testimonials: {
    title: string;
  };
  scheduling: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      phone: string;
      service: string;
      city: string;
      notes: string;
      notesPlaceholder: string;
      button: string;
      sending: string;
      consent: string;
      errors: {
        name: string;
        email: string;
        phone: string;
      };
    };
  };
  directContact: {
    title: string;
    subtitle: string;
    call: string;
    sms: string;
    whatsapp: string;
    email: string;
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
    hours: string;
    area: string;
  };
  thankYou: {
    title: string;
    subtitle: string;
    hurry: string;
    backToHome: string;
  };
}

// Official service names (business spec RN-3.1) stay in English in every
// language, so menus, forms and ads always match.
export const SERVICE_NAMES = [
  'Airbnb Turnover Cleaning',
  'Deep Clean Reset',
  'Office Cleaning',
  'Post-Renovation Cleaning',
  'Upholstery & Mattress Cleaning',
];

export const translations: { [key: string]: Translation } = {
  en: {
    nav: {
      howItWorks: "How It Works",
      services: "Services",
      benefits: "Why Us",
      scheduling: "Get a Quote",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Airbnb turnover cleaning · DC · MD · VA",
      title: "You see it clean before your guest does.",
      subtitle: "Done before check-in. Photos of every room, and any problem flagged right away.",
      priceFrom: "Turnovers from",
      getQuote: "Get a quote",
      call: "Call",
      replyTime: "We reply within 30 minutes, 8am to 8pm, 7 days.",
      offerTitle: "30% off your first turnover",
      offerNote: "One unit per new client. Mention it when you message us.",
    },
    howItWorks: {
      title: "How It Works",
      steps: {
        register: {
          title: "Send your listing",
          description: "Bedrooms, city, checkout time and how we get in.",
        },
        report: {
          title: "Problems flagged",
          description: "Damage or missing items? We message you with photos right away.",
        },
        cleaning: {
          title: "Clean and restock",
          description: "Full clean, fresh beds, on-site laundry and supplies refilled.",
        },
        record: {
          title: "Photo report",
          description: "Photos of every room, sent as soon as we finish.",
        },
        validation: {
          title: "Guest-ready",
          description: "Done before check-in, ready for your next guest.",
        },
      },
    },
    services: {
      title: "What We Clean",
      standard: {
        title: "Airbnb Turnover Cleaning",
        price: "From $110 per turnover",
        features: [
          "Full clean of every room and fresh beds",
          "On-site laundry and supplies restocked",
          "Photo report after every clean",
        ],
      },
      postEvent: {
        title: "Deep Clean Reset",
        price: "From $230",
        features: [
          "Deep clean after parties or long stays",
          "Kitchen, bathrooms, inside appliances and baseboards",
          "Photo report after every clean",
        ],
      },
      express: {
        title: "Office Cleaning",
        price: "Free walkthrough, flat monthly price",
        features: [
          "Small offices up to about 3,000 sq ft",
          "Evening and weekend cleaning",
          "Same crew every visit",
        ],
      },
      alsoAvailable: "Also available",
      alsoAvailableList: "Post-Renovation Cleaning · Upholstery & Mattress Cleaning. Text us a photo for a quote.",
      button: "Get a quote",
    },
    benefits: {
      title: "Why Hosts Choose Us",
      items: {
        quality: {
          title: "Same crew every visit",
          description: "Our own team cleans your unit, so they already know how you like it.",
        },
        time: {
          title: "Done before check-in",
          description: "Same-day turnovers at no extra cost.",
        },
        ratings: {
          title: "Photo proof",
          description: "Photos of every room after each clean, straight to your phone.",
        },
        history: {
          title: "Problems flagged right away",
          description: "Damage or missing items reported on the spot. We speak English, Português and Español.",
        },
      },
    },
    testimonials: {
      title: "What Airbnb Hosts Say",
    },
    scheduling: {
      title: "Get a Quote",
      subtitle: "Leave your details and we'll text you within 30 minutes, 8am to 8pm.",
      form: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        service: "Service",
        city: "City (optional)",
        notes: "Anything else? (optional)",
        notesPlaceholder: "Bedrooms, checkout time, number of units...",
        button: "Send request",
        sending: "Sending...",
        consent: "By sending, you agree we may text or email you about your quote.",
        errors: {
          name: "Please enter your name.",
          email: "Enter a valid email, like you@email.com.",
          phone: "Enter a 10-digit US phone number.",
        },
      },
    },
    directContact: {
      title: "Prefer to Message Us?",
      subtitle: "Most hosts text us. Pick the app you use.",
      call: "Call",
      sms: "iMessage",
      whatsapp: "WhatsApp",
      email: "Email",
    },
    cta: {
      title: "Ready for your next checkout?",
      subtitle: "Send us your bedrooms, city and checkout time. We reply within 30 minutes.",
      button: "Get a quote",
    },
    footer: {
      terms: "Terms",
      privacy: "Privacy",
      contact: "Contact",
      rights: "AirCleanB. All rights reserved.",
      hours: "8am to 8pm, 7 days",
      area: "Cleaning for Airbnb hosts and small offices in DC, Maryland & Virginia.",
    },
    thankYou: {
      title: "Thanks! We got your request.",
      subtitle: "We'll text you within 30 minutes, 8am to 8pm, 7 days.",
      hurry: "In a hurry? Message us now",
      backToHome: "Back to Home",
    },
  },
  pt: {
    nav: {
      howItWorks: "Como Funciona",
      services: "Serviços",
      benefits: "Por que nós",
      scheduling: "Orçamento",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Limpeza de turnover para Airbnb · DC · MD · VA",
      title: "Você vê tudo limpo antes do seu hóspede.",
      subtitle: "Pronto antes do check-in. Fotos de cada cômodo e qualquer problema avisado na hora.",
      priceFrom: "Turnovers a partir de",
      getQuote: "Pedir orçamento",
      call: "Ligar",
      replyTime: "Respondemos em até 30 minutos, das 8h às 20h, 7 dias por semana.",
      offerTitle: "30% de desconto no seu primeiro turnover",
      offerNote: "Uma unidade por cliente novo. Mencione ao mandar mensagem.",
    },
    howItWorks: {
      title: "Como Funciona",
      steps: {
        register: {
          title: "Envie seu anúncio",
          description: "Quartos, cidade, horário de checkout e como entramos.",
        },
        report: {
          title: "Problemas avisados",
          description: "Algo danificado ou faltando? Mandamos mensagem com fotos na hora.",
        },
        cleaning: {
          title: "Limpeza e reposição",
          description: "Limpeza completa, camas feitas, lavanderia no imóvel e itens repostos.",
        },
        record: {
          title: "Relatório de fotos",
          description: "Fotos de cada cômodo, enviadas assim que terminamos.",
        },
        validation: {
          title: "Pronto para o hóspede",
          description: "Pronto antes do check-in, esperando o próximo hóspede.",
        },
      },
    },
    services: {
      title: "O Que Limpamos",
      standard: {
        title: "Airbnb Turnover Cleaning",
        price: "A partir de $110 por turnover",
        features: [
          "Limpeza completa de todos os cômodos e camas feitas",
          "Lavanderia no imóvel e itens repostos",
          "Relatório de fotos após cada limpeza",
        ],
      },
      postEvent: {
        title: "Deep Clean Reset",
        price: "A partir de $230",
        features: [
          "Limpeza pesada após festas ou estadias longas",
          "Cozinha, banheiros, dentro dos eletrodomésticos e rodapés",
          "Relatório de fotos após cada limpeza",
        ],
      },
      express: {
        title: "Office Cleaning",
        price: "Visita grátis, preço mensal fixo",
        features: [
          "Escritórios pequenos, até cerca de 3.000 sq ft",
          "Limpeza à noite e nos fins de semana",
          "Mesma equipe em cada visita",
        ],
      },
      alsoAvailable: "Também oferecemos",
      alsoAvailableList: "Post-Renovation Cleaning · Upholstery & Mattress Cleaning. Mande uma foto por mensagem para orçamento.",
      button: "Pedir orçamento",
    },
    benefits: {
      title: "Por Que Anfitriões Nos Escolhem",
      items: {
        quality: {
          title: "Mesma equipe em cada visita",
          description: "Nossa própria equipe limpa seu imóvel e já sabe como você gosta.",
        },
        time: {
          title: "Pronto antes do check-in",
          description: "Turnover no mesmo dia sem custo extra.",
        },
        ratings: {
          title: "Prova com fotos",
          description: "Fotos de cada cômodo após cada limpeza, direto no seu celular.",
        },
        history: {
          title: "Problemas avisados na hora",
          description: "Danos ou itens faltando são avisados na hora. Falamos inglês, português e espanhol.",
        },
      },
    },
    testimonials: {
      title: "O Que Dizem os Anfitriões",
    },
    scheduling: {
      title: "Pedir Orçamento",
      subtitle: "Deixe seus dados e mandamos mensagem em até 30 minutos, das 8h às 20h.",
      form: {
        name: "Nome",
        email: "E-mail",
        phone: "Telefone",
        service: "Serviço",
        city: "Cidade (opcional)",
        notes: "Algo mais? (opcional)",
        notesPlaceholder: "Quartos, horário de checkout, número de unidades...",
        button: "Enviar pedido",
        sending: "Enviando...",
        consent: "Ao enviar, você concorda que podemos mandar mensagem ou e-mail sobre seu orçamento.",
        errors: {
          name: "Digite seu nome.",
          email: "Digite um e-mail válido, como voce@email.com.",
          phone: "Digite um telefone dos EUA com 10 dígitos.",
        },
      },
    },
    directContact: {
      title: "Prefere Mandar Mensagem?",
      subtitle: "A maioria dos anfitriões manda mensagem. Escolha o app que você usa.",
      call: "Ligar",
      sms: "iMessage",
      whatsapp: "WhatsApp",
      email: "E-mail",
    },
    cta: {
      title: "Pronto para o próximo checkout?",
      subtitle: "Mande os quartos, a cidade e o horário de checkout. Respondemos em até 30 minutos.",
      button: "Pedir orçamento",
    },
    footer: {
      terms: "Termos",
      privacy: "Privacidade",
      contact: "Contato",
      rights: "AirCleanB. Todos os direitos reservados.",
      hours: "Das 8h às 20h, 7 dias",
      area: "Limpeza para anfitriões de Airbnb e escritórios pequenos em DC, Maryland e Virginia.",
    },
    thankYou: {
      title: "Obrigado! Recebemos seu pedido.",
      subtitle: "Mandamos mensagem em até 30 minutos, das 8h às 20h, 7 dias por semana.",
      hurry: "Com pressa? Mande mensagem agora",
      backToHome: "Voltar para a página inicial",
    },
  },
  es: {
    nav: {
      howItWorks: "Cómo Funciona",
      services: "Servicios",
      benefits: "Por qué nosotros",
      scheduling: "Cotizar",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Limpieza de turnover para Airbnb · DC · MD · VA",
      title: "Lo ves limpio antes que tu huésped.",
      subtitle: "Listo antes del check-in. Fotos de cada cuarto y cualquier problema avisado al momento.",
      priceFrom: "Turnovers desde",
      getQuote: "Pedir cotización",
      call: "Llamar",
      replyTime: "Respondemos en menos de 30 minutos, de 8am a 8pm, 7 días.",
      offerTitle: "30% de descuento en tu primer turnover",
      offerNote: "Una unidad por cliente nuevo. Menciónalo al escribirnos.",
    },
    howItWorks: {
      title: "Cómo Funciona",
      steps: {
        register: {
          title: "Envía tu anuncio",
          description: "Habitaciones, ciudad, hora de checkout y cómo entramos.",
        },
        report: {
          title: "Problemas avisados",
          description: "¿Algo dañado o faltante? Te escribimos con fotos al momento.",
        },
        cleaning: {
          title: "Limpieza y reposición",
          description: "Limpieza completa, camas listas, lavandería en el lugar y suministros repuestos.",
        },
        record: {
          title: "Reporte de fotos",
          description: "Fotos de cada cuarto, enviadas apenas terminamos.",
        },
        validation: {
          title: "Listo para el huésped",
          description: "Listo antes del check-in para tu próximo huésped.",
        },
      },
    },
    services: {
      title: "Lo Que Limpiamos",
      standard: {
        title: "Airbnb Turnover Cleaning",
        price: "Desde $110 por turnover",
        features: [
          "Limpieza completa de cada cuarto y camas listas",
          "Lavandería en el lugar y suministros repuestos",
          "Reporte de fotos después de cada limpieza",
        ],
      },
      postEvent: {
        title: "Deep Clean Reset",
        price: "Desde $230",
        features: [
          "Limpieza profunda después de fiestas o estadías largas",
          "Cocina, baños, dentro de electrodomésticos y zócalos",
          "Reporte de fotos después de cada limpieza",
        ],
      },
      express: {
        title: "Office Cleaning",
        price: "Visita gratis, precio mensual fijo",
        features: [
          "Oficinas pequeñas de hasta unos 3,000 sq ft",
          "Limpieza por la noche y fines de semana",
          "El mismo equipo en cada visita",
        ],
      },
      alsoAvailable: "También ofrecemos",
      alsoAvailableList: "Post-Renovation Cleaning · Upholstery & Mattress Cleaning. Envíanos una foto para cotizar.",
      button: "Pedir cotización",
    },
    benefits: {
      title: "Por Qué Nos Eligen los Anfitriones",
      items: {
        quality: {
          title: "El mismo equipo en cada visita",
          description: "Nuestro propio equipo limpia tu unidad y ya sabe cómo te gusta.",
        },
        time: {
          title: "Listo antes del check-in",
          description: "Turnovers el mismo día sin costo extra.",
        },
        ratings: {
          title: "Prueba con fotos",
          description: "Fotos de cada cuarto después de cada limpieza, directo a tu celular.",
        },
        history: {
          title: "Problemas avisados al momento",
          description: "Daños o faltantes reportados al momento. Hablamos inglés, portugués y español.",
        },
      },
    },
    testimonials: {
      title: "Lo Que Dicen los Anfitriones",
    },
    scheduling: {
      title: "Pedir Cotización",
      subtitle: "Déjanos tus datos y te escribimos en menos de 30 minutos, de 8am a 8pm.",
      form: {
        name: "Nombre",
        email: "Correo",
        phone: "Teléfono",
        service: "Servicio",
        city: "Ciudad (opcional)",
        notes: "¿Algo más? (opcional)",
        notesPlaceholder: "Habitaciones, hora de checkout, número de unidades...",
        button: "Enviar solicitud",
        sending: "Enviando...",
        consent: "Al enviar, aceptas que te escribamos por mensaje o correo sobre tu cotización.",
        errors: {
          name: "Escribe tu nombre.",
          email: "Escribe un correo válido, como tu@correo.com.",
          phone: "Escribe un teléfono de EE. UU. de 10 dígitos.",
        },
      },
    },
    directContact: {
      title: "¿Prefieres Escribirnos?",
      subtitle: "La mayoría de los anfitriones nos escribe. Elige la app que usas.",
      call: "Llamar",
      sms: "iMessage",
      whatsapp: "WhatsApp",
      email: "Correo",
    },
    cta: {
      title: "¿Listo para tu próximo checkout?",
      subtitle: "Envíanos habitaciones, ciudad y hora de checkout. Respondemos en menos de 30 minutos.",
      button: "Pedir cotización",
    },
    footer: {
      terms: "Términos",
      privacy: "Privacidad",
      contact: "Contacto",
      rights: "AirCleanB. Todos los derechos reservados.",
      hours: "De 8am a 8pm, 7 días",
      area: "Limpieza para anfitriones de Airbnb y oficinas pequeñas en DC, Maryland y Virginia.",
    },
    thankYou: {
      title: "¡Gracias! Recibimos tu solicitud.",
      subtitle: "Te escribimos en menos de 30 minutos, de 8am a 8pm, 7 días.",
      hurry: "¿Tienes prisa? Escríbenos ahora",
      backToHome: "Volver al inicio",
    },
  },
};
