import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const CursorGlow = () => {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const smoothX = useSpring(x, { stiffness: 120, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 150);
      y.set(e.clientY - 150);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px]
                 rounded-full blur-3xl z-0
                 bg-primary/10"
    />
  );
};
