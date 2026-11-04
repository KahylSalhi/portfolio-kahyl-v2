import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="reveal"
      initial={{ y: 12, opacity: 1 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
