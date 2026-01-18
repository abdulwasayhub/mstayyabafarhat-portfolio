export const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const magnetic = {
  rest: { x: 0, y: 0 },
  hover: {
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18,
    },
  },
};
