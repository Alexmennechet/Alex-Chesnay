import Head from 'next/head';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';
import Breadcrumb from '../../components/Breadcrumb';
import CategoryCard from '../../components/CategoryCard';

const siteUrl = 'https://alex-chesnay.com';

const categories = [
  { name: 'Interviews', slug: 'interviews' },
  { name: 'Lectures', slug: 'lectures' },
  { name: 'Modeling', slug: 'modeling' },
  { name: 'News', slug: 'news' },
  { name: 'Projects', slug: 'projects' },
  { name: 'Resources', slug: 'resources' },
  { name: 'Rigging', slug: 'rigging' }
];

export default function Blog() {
  const title = "Blog - Studio d'animation 3D Alex Chesnay";
  const description =
    "Actualités du studio d'animation 3D et articles récents.";
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/blog`;

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
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Blog' }
          ]}
        />
        <h1>Blog du studio d'animation 3D</h1>
        <div className="responsive-grid">
          {categories.map((category) => (
            <CategoryCard key={category.slug} {...category} />
          ))}
        </div>
      </motion.main>
    </>
  );
}
