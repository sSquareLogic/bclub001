import { IProfessor } from "@/types/professors.types";

const professors: IProfessor[] = [
  {
    position: "first",
    name: "Skay",
    description:
      "Conocido en el mundo de la barbería por su amplia trayectoria de más de 12 años, triple campeón de categoría freestyle y especialista en diseños.",
    image: "/assets/images/professors-1.png",
  },
  {
    name: "Christian",
    description:
      "Como profesional en el mundo de la barbería, ha acumulado más de diez años de trayectoria, demostrando su destreza en la perfección de la técnica del fade, barbas, peinados, formas y texturas.",
    image: "/assets/images/professors-2.png",
  },
  {
    position: "last",
    name: "Pavas",
    description:
      " Como experto en el arte de la barbería con una trayectoria de 8 años, ha perfeccionado sus habilidades en el uso de tijeras para crear texturas únicas, acabados de peinados y técnicas de fade.",
    image: "/assets/images/professors-3.png",
  },
];

export default professors;
