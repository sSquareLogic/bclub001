import personalData from "./personal.data";

export default {
  title: "INSCRIBETE a la formación HOY.",
  text: [
    'Ofrecemos el mejor plan para empezar hoy mismo ya que nuestro curso es <span class="text-bg">limitado</span>.',
    'Queremos que los alumnos que se inscriban <span class="text-bg">disfruten de la mayor atención</span> de nuestros profesores por lo que los grupos serán reducidos.',
    'La formación es <span class="text-bg">intensiva</span> con una duracion de <span class="text-bg">6 meses</span> con turnos en la mañana.',
  ],
  logo: "/assets/images/logo.svg",
  subscribe: {
    name: "reserva tu plaza",
    price: "495€ Precio de inscripción",
    totalPrice: "Con un precio total de 3950€",
    list: [
      "Financiación disponible",
      "Diploma certificado",
      "Prácticas en ForceBaberVip – Marbella",
      "Curso intensivo para todas las edades +16",
      "Sin experiencia previa",
      "Grupos de mañana y tarde",
      "Kit profesional personal para cada alumno",
    ],
    buttonText: "inscríbete ya",
    buttonHref: `https://wa.me/${personalData.phoneNumber}`,
  },
};
