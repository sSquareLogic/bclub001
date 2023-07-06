import { Variants } from "framer-motion";
import { Animations } from "./types/animations.types";

const animations: Record<Animations, Variants> = {
  fadeIn: {
    initial: {
      opacity: 0,
    },
    inView: {
      opacity: 1,
    },
  },
  toTop: {
    initial: {
      y: "60px",
    },
    inView: {
      y: "0px",
    },
  },
  toBottom: {
    initial: {
      y: "-60px",
    },
    inView: {
      y: "0px",
    },
  },
  toLeft: {
    initial: {
      x: "-60px",
    },
    inView: {
      x: "0px",
    },
  },
  toRight: {
    initial: {
      x: "60px",
    },
    inView: {
      x: "0px",
    },
  },
  toTopOpacity: {
    initial: {
      opacity: 0,
      y: "60px",
    },
    inView: {
      opacity: 1,
      y: "0px",
    },
  },
  toBottomOpacity: {
    initial: {
      opacity: 0,
      y: "-60px",
    },
    inView: {
      opacity: 1,
      y: "0px",
    },
  },
  toLeftOpacity: {
    initial: {
      opacity: 0,
      x: "-60px",
    },
    inView: { opacity: 1, x: "0px" },
  },
  toRightOpacity: {
    initial: {
      opacity: 0,
      x: "60px",
    },
    inView: { opacity: 1, x: "0px" },
  },
};

export default animations;
