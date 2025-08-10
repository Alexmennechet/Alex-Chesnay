import Head from 'next/head';
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

const siteUrl = 'https://alex-chesnay.com';

export default function Projects({
  projects,
  initialCategory = 'Featured',
  title = "Projets - Studio d'animation 3D Alex Chesnay",
  description = "Galerie des projets de notre studio d'animation 3D.",
  canonical = '/projects'
}) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const filteredProjects =
    selectedCategory === 'Featured'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}${canonical}`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="canonical" href={url} />
      </Head>
      <motion.main
        style={{ padding: theme.spacing.lg }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1>Galerie de notre studio d'animation 3D</h1>
        <FilterBar
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <motion.ul
          layout
          className="responsive-grid"
          style={{
            listStyle: 'none',
            padding: 0,
            margin: `${theme.spacing.lg} 0`,
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
      </motion.main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'private', 'projects.json');
  const projects = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { projects } };
}
