import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';
import ServiceSection from '../../components/ServiceSection';

const siteUrl = 'https://alex-chesnay.com';

export default function Services() {
  const title = 'Services - Alex Chesnay';
  const description = 'Découvrez les prestations que nous proposons.';
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/services`;

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
        <h1>Nos services</h1>
        <ServiceSection
          title="Prestations disponibles"
          text="Explorez nos domaines d'expertise."
          items={[
            <>
              <Link href="/services/modelisation">Modélisation</Link> – création
              de modèles 3D détaillés.
            </>,
            <>
              <Link href="/services/animation">Animation</Link> – mise en
              mouvement réaliste de vos concepts.
            </>,
            <>
              <Link href="/services/vfx">VFX</Link> – effets visuels pour des
              images plus immersives.
            </>,
          ]}
          ctaText="Contactez-nous"
          ctaHref="/contact"
        />
      </motion.main>
    </>
  );
}
