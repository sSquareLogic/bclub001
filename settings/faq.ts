import personalData from "./personal.data";

export default {
  title: "Preguntas frequentes",
  list: [
    {
      title: "Necesito experiencia previa?",
      text: "No este curso es de iniciación desde <strong class='text-white'>cero</strong class='text-white'> por lo que te vamos a dar todas las técnicas y herramientas para ser un barbero de élite.",
    },
    {
      title: "Donde será la formación?",
      text: "Se realizará en las instalaciones de <span class='uppercase'><strong class='text-white'>Force Barber Club VIP</strong class='text-white'></span> en Marbella (Av. Severo Ochoa, 35, Local 4, 29603, Marbella)",
    },
    {
      title: "Cuánto tiempo dura la formación?",
      text: "La formación tiene una duración estimada de 6 meses.",
    },
    {
      title: "Es para todo los públicos?",
      text: "Si apartir de 16 años, este curso es para todas las personas que quieran entrar en la industria y ser exitosos.",
    },
    {
      title: "Como puedo pagar?",
      text: "Aceptamos todos métodos de pago, puedes pagar en efectivo en cualesquiera de las barberías forcé barber club, transferencia bancaria, paypal.",
    },
    {
      title: "Puedo pagar financiado?",
      text: `Si contacta con nuestro equipo para hacer tu financiación personal <a href='mailto:${personalData.email}'><strong class='text-white'>${personalData.email}</strong></a> y <a href='https://wa.me/${personalData.phoneNumber}'>${personalData.phoneNumber}</a>`,
    },
    {
      title: "Obtengo un certificado?",
      text: " Si, al final del curso recibirás un certificado de enseñanzas privadas y profesionales de barbería y estética.",
    },
    {
      title: "Necesito material de trabajo?",
      text: "No, te entregaremos tu material de trabajo incluido en la formación link para descargar el pdf donde ver todo el material.",
    },
  ],
};
