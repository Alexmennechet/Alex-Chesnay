import Head from 'next/head';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';
import ServiceSection from '../../components/ServiceSection';

const siteUrl = 'https://alex-chesnay.com';

export default function Modelisation() {
  const title = 'Modélisation - Alex Chesnay';
  const description = 'Conception et création de modèles 3D sur mesure.';
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/services/modelisation`;

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
        <h1>Modélisation</h1>
        <p>
          Nous réalisons des modèles 3D précis et optimisés pour vos besoins,
          qu'il s'agisse de prototypes ou de visuels finalisés.
        </p>
        <ServiceSection
          title="Nos prestations"
          text="Une modélisation sur mesure pour chaque projet."
          items={[
            'Modèles haute fidélité',
            'Optimisation pour le temps réel',
            'Texturing et shading',
          ]}
          ctaText="Parler de votre idée"
          ctaHref="/contact"
        />
      </motion.main>
    </>
  );
}
