import { motion, useReducedMotion } from 'framer-motion';
import theme from '../styles/theme';
import styles from './FilterBar.module.css';

const categories = [
  'Featured',
  '3D Animation',
  '2D Animation',
  'VFX',
  'Virtual Reality'
];

export default function FilterBar({ selectedCategory, onSelect }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      style={{
        display: 'flex',
        gap: theme.spacing.sm,
        marginBottom: theme.spacing.md
      }}
    >
      {categories.map((cat) => (
        <motion.button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`${styles.button} ${selectedCategory === cat ? styles.buttonActive : ''}`}
          whileHover={
            shouldReduceMotion
              ? {}
              : { y: `calc(-1 * ${theme.spacing.xs})` }
          }
          transition={{ duration: 0.2 }}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}

