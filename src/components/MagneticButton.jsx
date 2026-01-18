import { motion } from "framer-motion";
import { useRef } from "react";

export const MagneticButton = ({ children, className, ...props }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const onLeave = () => {
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
};
