import Head from 'next/head';
import HeroHeader from '../components/HeroHeader';
import theme from '../styles/theme';
import { motion } from 'framer-motion';

const siteUrl = 'https://alex-chesnay.com';

export default function Home() {
  const title = 'Accueil - Alex Chesnay';
  const description = 'Bienvenue sur mon portfolio.';
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/`;

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
      <main>
        <HeroHeader />
        <motion.section
          style={{ padding: theme.spacing.lg }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1>Accueil</h1>
          <p>Bienvenue sur mon portfolio.</p>
        </motion.section>
      </main>
    </>
  );
}
