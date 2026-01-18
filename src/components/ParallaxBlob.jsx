import { motion, useScroll, useTransform } from "framer-motion";

export const ParallaxBlob = ({ className, speed = 0.2 }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed]);

  return (
    <motion.div
      style={{ y }}
      className={className}
    />
  );
};
