import { motion, useReducedMotion } from 'framer-motion';
import theme from '../styles/theme';

export default function FadeInSection({ children, ...props }) {
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion ? {} : { opacity: 0, y: theme.spacing.sm };
  const animate = shouldReduceMotion ? {} : { opacity: 1, y: 0 };

  return (
    <motion.section
      initial={initial}
      whileInView={animate}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
