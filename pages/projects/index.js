import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import theme from '../../styles/theme';
import FilterBar from '../../components/FilterBar';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export default function Projects({ projects }) {
  const [selectedCategory, setSelectedCategory] = useState('3D');
  const filteredProjects = projects.filter(
    (p) => p.category === selectedCategory
  );

  return (
    <main style={{ padding: theme.spacing.lg }}>
      <h1>Galerie</h1>
      <FilterBar
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <motion.ul
        layout
        style={{
          listStyle: 'none',
          padding: 0,
          margin: `${theme.spacing.lg} 0`,
          display: 'grid',
          gap: theme.spacing.md
        }}
      >
        <AnimatePresence>
          {filteredProjects.map((p) => (
            <motion.li
              key={p.slug}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                background: theme.colors.background,
                padding: theme.spacing.md,
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
            >
              <Link href={`/projects/${p.slug}`}>{p.title}</Link>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const projects = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { projects } };
}
