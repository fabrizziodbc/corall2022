const menu1 = document.querySelectorAll('.lang__menu-1');
const menu2 = document.querySelectorAll('.lang__menu-2');
const menu3 = document.querySelectorAll('.lang__menu-3');
const menu4 = document.querySelectorAll('.lang__menu-4');
const menu5 = document.querySelectorAll('.lang__menu-5');
const carouselText1 = document.querySelector('.lang__carousel-text-1');
const carouselButton1 = document.querySelector('.lang__carousel-button-1');
const carouselText2 = document.querySelector('.lang__carousel-text-2');
const carouselButton2 = document.querySelector('.lang__carousel-button-2');
const carouselText3 = document.querySelector('.lang__carousel-text-3');
const carouselButton3 = document.querySelector('.lang__carousel-button-3');
const abouth1 = document.querySelector('.lang__about-h1');
const abouth1Span = document.querySelector('.lang__about-span');
const aboutStrong = document.querySelector('.lang__about-strong');
const aboutText2 = document.querySelector('.lang__about-text-2');
const aboutButton = document.querySelector('.lang__about-button');
const solutionsButton = document.querySelectorAll('.lang__solutions-button');
const advisoryTitle = document.querySelector('.lang__advisory-title');
const advisorySubitle = document.querySelector('.lang__advisory-subtitle');
const advisorySubSubTitle = document.querySelector(
  '.lang__advisory-subsubtitle',
);
const advisoryItemTitle1 = document.querySelector(
  '.lang__advisory-item-title-1',
);
const advisoryItemDescription1 = document.querySelector(
  '.lang__advisory-item-description-1',
);
const advisoryItemTitle2 = document.querySelector(
  '.lang__advisory-item-title-2',
);
const advisoryItemDescription2 = document.querySelector(
  '.lang__advisory-item-description-2',
);
const advisoryItemTitle3 = document.querySelector(
  '.lang__advisory-item-title-3',
);
const advisoryItemDescription3 = document.querySelector(
  '.lang__advisory-item-description-3',
);
const advisoryItemTitle4 = document.querySelector(
  '.lang__advisory-item-title-4',
);
const advisoryItemDescription4 = document.querySelector(
  '.lang__advisory-item-description-4',
);
const contactTitle = document.querySelector('.lang__contact-title');
const inputName = document.querySelector('.lang__contact-input-name');
const inputEmail = document.querySelector('.lang__contact-input-email');
const inputPhone = document.querySelector('.lang__contact-input-phone');
const inputMessage = document.querySelector('.lang__contact-input-message');
const inputButton = document.querySelector('.lang__contact-button');
const footerLocation = document.querySelector('.lang__footer-location');
const footerPhone = document.querySelector('.lang__footer-phone');
const footerEmail = document.querySelector('.lang__footer-email');
const footerCopyrigth = document.querySelector('.lang__footer-copyrigth');
const solutionsTitleText1 = document.querySelector(
  '.lang__solutions-title1-text',
);
const solutionsTitleSpan1 = document.querySelector(
  '.lang__solutions-title1-span',
);
const solutionsTitleText2 = document.querySelector(
  '.lang__solutions-title2-text',
);
const solutionsTitleSpan2 = document.querySelector(
  '.lang__solutions-title2-span',
);
const clientsTitleText = document.querySelector('.lang__clients-title-text');
const clientsTitleSpan = document.querySelector('.lang__clients-title-span');

const toEng = () => {
  menu1.forEach((el) => (el.textContent = language.eng.menu[0]));
  menu2.forEach((el) => (el.textContent = language.eng.menu[1]));
  menu3.forEach((el) => (el.textContent = language.eng.menu[2]));
  menu4.forEach((el) => (el.textContent = language.eng.menu[3]));
  menu5.forEach((el) => (el.textContent = language.eng.menu[4]));
  carouselText1.textContent = language.eng.carousel[1].text;
  carouselButton1.textContent = language.eng.carousel[1].button;
  carouselText2.textContent = language.eng.carousel[2].text;
  carouselButton2.textContent = language.eng.carousel[2].button;
  carouselText3.textContent = language.eng.carousel[3].text;
  carouselButton3.textContent = language.eng.carousel[3].button;
  abouth1Span.textContent = language.eng.about.h1.span;
  abouth1.textContent = language.eng.about.h1.text;
  aboutStrong.textContent = language.eng.about.strong;
  aboutText2.textContent = language.eng.about.text_2.text;
  aboutButton.textContent = language.eng.about.button;
  solutionsButton.forEach(
    (el) => (el.textContent = language.eng.solutions.button),
  );
  advisoryTitle.textContent = language.eng.advisory.title;
  advisorySubitle.textContent = language.eng.advisory.subtitle;
  advisorySubSubTitle.textContent = language.eng.advisory.subsubtitle;
  advisoryItemTitle1.textContent = language.eng.advisory.items[1].title;
  advisoryItemDescription1.textContent =
    language.eng.advisory.items[1].description;
  advisoryItemTitle2.textContent = language.eng.advisory.items[2].title;
  advisoryItemDescription2.textContent =
    language.eng.advisory.items[2].description;
  advisoryItemTitle3.textContent = language.eng.advisory.items[3].title;
  advisoryItemDescription3.textContent =
    language.eng.advisory.items[3].description;
  advisoryItemTitle4.textContent = language.eng.advisory.items[4].title;
  advisoryItemDescription4.textContent =
    language.eng.advisory.items[4].description;
  contactTitle.textContent = language.eng.contact.title;
  inputName.placeholder = language.eng.contact.form.name.placeholder;
  inputEmail.placeholder = language.eng.contact.form.email.placeholder;
  inputPhone.placeholder = language.eng.contact.form.phone.placeholder;
  inputMessage.placeholder = language.eng.contact.form.message.placeholder;
  inputButton.textContent = language.eng.contact.button;
  footerLocation.textContent = language.eng.footer.contactInfo.location;
  footerPhone.textContent = language.eng.footer.contactInfo.phone;
  footerEmail.textContent = language.eng.footer.contactInfo.email;
  footerCopyrigth.textContent = language.eng.footer.copyrigth;
  solutionsTitleText1.textContent = language.eng.solutions.title_1.text;
  solutionsTitleSpan1.textContent = language.eng.solutions.title_1.span;
  solutionsTitleText2.textContent = language.eng.solutions.title_2.text;
  solutionsTitleSpan2.textContent = language.eng.solutions.title_2.span;
  clientsTitleText.textContent = language.eng.clients.title.text;
  clientsTitleSpan.textContent = language.eng.clients.title.span;
};
const toEsp = () => {
  menu1.forEach((el) => (el.textContent = language.eng.menu[0]));
  menu2.forEach((el) => (el.textContent = language.eng.menu[1]));
  menu3.forEach((el) => (el.textContent = language.eng.menu[2]));
  menu4.forEach((el) => (el.textContent = language.eng.menu[3]));
  menu5.forEach((el) => (el.textContent = language.eng.menu[4]));
  carouselText1.textContent = language.eng.carousel[1].text;
  carouselButton1.textContent = language.eng.carousel[1].button;
  carouselText2.textContent = language.eng.carousel[2].text;
  carouselButton2.textContent = language.eng.carousel[2].button;
  carouselText3.textContent = language.eng.carousel[3].text;
  carouselButton3.textContent = language.eng.carousel[3].button;
  abouth1Span.textContent = language.eng.about.h1.span;
  abouth1.textContent = language.eng.about.h1.text;
  aboutStrong.textContent = language.eng.about.strong;
  aboutText2.textContent = language.eng.about.text_2.text;
  aboutButton.textContent = language.eng.about.button;
  solutionsButton.forEach(
    (el) => (el.textContent = language.eng.solutions.button),
  );
  advisoryTitle.textContent = language.eng.advisory.title;
  advisorySubitle.textContent = language.eng.advisory.subtitle;
  advisorySubSubTitle.textContent = language.eng.advisory.subsubtitle;
  advisoryItemTitle1.textContent = language.eng.advisory.items[1].title;
  advisoryItemDescription1.textContent =
    language.eng.advisory.items[1].description;
  advisoryItemTitle2.textContent = language.eng.advisory.items[2].title;
  advisoryItemDescription2.textContent =
    language.eng.advisory.items[2].description;
  advisoryItemTitle3.textContent = language.eng.advisory.items[3].title;
  advisoryItemDescription3.textContent =
    language.eng.advisory.items[3].description;
  advisoryItemTitle4.textContent = language.eng.advisory.items[4].title;
  advisoryItemDescription4.textContent =
    language.eng.advisory.items[4].description;
  contactTitle.textContent = language.eng.contact.title;
  inputName.placeholder = language.eng.contact.form.name.placeholder;
  inputEmail.placeholder = language.eng.contact.form.email.placeholder;
  inputPhone.placeholder = language.eng.contact.form.phone.placeholder;
  inputMessage.placeholder = language.eng.contact.form.message.placeholder;
  inputButton.textContent = language.eng.contact.button;
  footerLocation.textContent = language.eng.footer.contactInfo.location;
  footerPhone.textContent = language.eng.footer.contactInfo.phone;
  footerEmail.textContent = language.eng.footer.contactInfo.email;
  footerCopyrigth.textContent = language.eng.footer.copyrigth;
  solutionsTitleText1.textContent = language.eng.solutions.title_1.text;
  solutionsTitleSpan1.textContent = language.eng.solutions.title_1.span;
  solutionsTitleText2.textContent = language.eng.solutions.title_2.text;
  solutionsTitleSpan2.textContent = language.eng.solutions.title_2.span;
  clientsTitleText.textContent = language.eng.clients.title.text;
  clientsTitleSpan.textContent = language.eng.clients.title.span;
};

const language = {
  esp: {
    menu: ['Inicio', 'Conócenos', 'Soluciones', 'Asesorias', 'Contáctanos'],
    carousel: {
      1: {
        text: 'Creamos hardware y aplicaciones web para monitorear tus procesos en tiempo real.',
        button: 'Conócenos',
      },
      2: {
        text: 'Usamos algoritmos IA para identificación, conteo y control de patrones.',
        button: 'Ver soluciones',
      },
      3: {
        text: 'Te escuchamos para hacer realidad tu proyecto tecnológico.',
        button: 'Asesorias',
      },
    },
    about: {
      h1: { span: 'Ingeniería', text: ' pensada en ti' },
      strong:
        'Somos una empresa liberteña especializada en brindar soluciones integrales de precisión para distintos sectores industriales.',
      text_2: {
        text: 'Creamos el software y hardware idóneo para la adquisición, interpretación y muestreo de la información, analizándola con sofisticados algoritmos de inteligencia artificial,',
        strong: 'brindando predicciones para una mejor toma de decisiones.',
      },
      button: 'Contáctanos',
    },
    clients: {
      title: { text: 'Nuestros', span: ' Clientes' },
    },
    solutions: {
      title_1: { span: 'Soluciones', text: ' como Servicio:' },
      title_2: { span: 'Público', text: ' en general' },
      button: 'Ver solución',
    },
    advisory: {
      title: 'Asesorias',
      subtitle:
        'Si tienes un proyecto académico o empresarial de cualquier rubro y deseas un complemento tecnológico, somos tus mejores aliados para hacerlo realidad. Te entendemos para llevar tu idea a otro nivel con apoyo de la tecnología, desarrollando el hardware y software necesario.',
      subsubtitle: '¿Cómo lo hacemos?',
      items: {
        1: {
          title: 'Escuchamos tu problema',
          description:
            'Agendamos una reunión para entender a profundidad la situación.',
        },
        2: {
          title: 'Aterrizamos tu solución',
          description:
            'Te damos una propuesta técnica con un plan de trabajo y recursos necesarios.',
        },
        3: {
          title: 'Lanzamos un piloto',
          description:
            'Ponemos en marcha el primer prototipo en un entorno real, brindando las mejoras necesarias',
        },
        4: {
          title: 'Validamos el producto',
          description:
            'Probamos su óptimo desempeño, cerrando con la documentación necesaria y lanzarlo al mercado (De ser el caso).',
        },
      },
    },
    contact: {
      title: 'Contáctanos',
      form: {
        name: {
          placeholder: 'Tu nombre',
          onInvalid: 'Por favor, ingresa un nombre válido',
        },
        email: {
          placeholder: 'Correo Electrónico',
          onInvalid: 'Por favor, ingresa un correo electrónico válido',
        },
        phone: {
          placeholder: 'Celular',
          onInvalid: 'Por favor, ingresa un número de teléfono válido',
        },
        message: {
          placeholder: 'Tu Mensaje',
          onInvalid: 'Por favor, ingresa tu mensaje',
        },
      },
      button: 'Enviar',
    },
    footer: {
      contactInfo: {
        location: 'Oficina',
        phone: 'Teléfono',
        email: 'Correo Electrónico',
      },
      copyrigth: 'Diseñado por CorAll D&R | Copyrigth 2022',
    },
  },
  eng: {
    menu: ['Home', 'About', 'Solutions', 'Advisory', 'Contact'],
    carousel: {
      1: {
        text: 'We create hardware and web applications to monitor your processes in real time.',
        button: 'About us',
      },
      2: {
        text: 'We use AI algorithms for pattern identification, counting and control.',
        button: 'Solutions',
      },
      3: {
        text: 'We listen to you to make your technological projects come true.',
        button: 'Advisory',
      },
    },
    about: {
      h1: { span: 'Engineering', text: ' thought of you' },
      strong:
        'We are a company located in La Libertad, specialized in providing comprehensive precision solutions for different industrial sectors.',
      text_2: {
        text: 'We create the ideal software and hardware for the acquisition, interpretation and sampling of information, analyzing it with sophisticated artificial intelligence algorithms,',
        strong: ' providing predictions for better decision making.',
      },
      button: 'Contact us',
    },
    clients: {
      title: { text: 'Our', span: 'Clients' },
    },
    solutions: {
      title_1: { span: 'Solutions', text: ' as a Service:' },
      title_2: { span: 'Public', text: ' General' },
      button: 'Explore',
    },
    advisory: {
      title: 'Advisory',
      subtitle:
        'If you have an academic or business project in any field and you want a technological complement, we are your best allies to make it happen. We understand you, to take your idea to another level with the support of technology, developing the necessary hardware and software.',
      subsubtitle: 'How do we do it?',
      items: {
        1: {
          title: 'We listen to your problem',
          description:
            'We schedule a meeting to fully understand the situation.',
        },
        2: {
          title: 'We land your solution',
          description:
            'We give you a technical proposal with a work plan and necessary resources.',
        },
        3: {
          title: 'We launched a pilot',
          description:
            'We start up the first prototype in a real environment, providing the necessary improvements.',
        },
        4: {
          title: 'We validate the product',
          description:
            'We test its optimal performance, closing with the necessary documentation and launching it on the market (If applicable).',
        },
      },
    },
    contact: {
      title: 'Contact',
      form: {
        name: {
          placeholder: 'Your name',
          onInvalid: 'Please enter a valid name',
        },
        email: {
          placeholder: 'Your Email',
          onInvalid: 'Please enter a valid email',
        },
        phone: {
          placeholder: 'Your Phone',
          onInvalid: 'Please enter a valid phone number',
        },
        message: {
          placeholder: 'Your message',
          onInvalid: 'Please enter a message',
        },
      },
      button: 'Send',
    },
    footer: {
      contactInfo: {
        location: 'Location',
        phone: 'Phone',
        email: 'Email',
      },
      copyrigth: 'Designed by CorAll D&R | Copyrigth 2022',
    },
  },
};
