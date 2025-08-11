import Head from 'next/head';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';
import ServiceSection from '../../components/ServiceSection';

const siteUrl = 'https://alex-chesnay.com';

export default function Animation() {
  const title = 'Animation - Alex Chesnay';
  const description = 'Animations 2D et 3D pour donner vie à vos idées.';
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/services/animation`;

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
        <h1>Animation</h1>
        <p>
          Nous produisons des animations fluides pour le cinéma, la publicité ou
          la communication interne.
        </p>
        <ServiceSection
          title="Ce que nous faisons"
          text="Des solutions d'animation adaptées à vos objectifs."
          items={[
            'Conception de storyboards',
            'Animations 2D/3D fluides',
            'Rendu et compositing',
          ]}
          ctaText="Démarrer un projet"
          ctaHref="/contact"
        />
      </motion.main>
    </>
  );
}
