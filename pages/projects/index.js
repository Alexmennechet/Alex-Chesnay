import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Projects({ projects }) {
  return (
    <main style={{ padding: theme.spacing.lg }}>
      <h1>Galerie</h1>
      <motion.ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: `${theme.spacing.lg} 0`,
          display: 'grid',
          gap: theme.spacing.md
        }}
      >
        {projects.map((p) => (
          <motion.li
            key={p.slug}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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
      </motion.ul>
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const projects = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { projects } };
}
