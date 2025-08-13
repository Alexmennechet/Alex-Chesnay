import Head from 'next/head';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';
import ServiceSection from '../../components/ServiceSection';
import Breadcrumb from '../../components/Breadcrumb';

const siteUrl = 'https://alex-chesnay.com';

export default function VFX() {
  const title = 'VFX - Alex Chesnay';
  const description = 'Effets visuels pour enrichir vos productions.';
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/services/vfx`;

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
            { label: 'Services', href: '/services' },
            { label: 'VFX' }
          ]}
        />
        <h1>VFX</h1>
        <p>
          Nous concevons des effets visuels saisissants pour renforcer l'impact
          de vos images et immerser votre audience.
        </p>
        <ServiceSection
          title="Expertises"
          text="Des effets sur mesure pour un rendu spectaculaire."
          items={[
            'Intégration avancée',
            'Simulations physiques',
            'Compositing final',
          ]}
          ctaText="Collaborer avec nous"
          ctaHref="/contact"
        />
      </motion.main>
    </>
  );
}
