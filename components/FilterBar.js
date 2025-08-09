import { motion } from 'framer-motion';
import theme from '../styles/theme';

const categories = ['3D', 'Animation', 'VFX', 'VR', 'IA'];

export default function FilterBar({ selectedCategory, onSelect }) {
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
          whileHover={{ scale: 1.05 }}
          style={{
            padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
            border: `1px solid ${theme.colors.primary}`,
            borderRadius: '4px',
            background:
              selectedCategory === cat
                ? theme.colors.primary
                : theme.colors.background,
            color:
              selectedCategory === cat
                ? theme.colors.background
                : theme.colors.primary,
            cursor: 'pointer'
          }}
        >
          {cat}
        </motion.button>
      ))}
    </div>
  );
}

