import Head from 'next/head';
import { motion } from 'framer-motion';
import theme from '../../styles/theme';

const siteUrl = 'https://alex-chesnay.com';

export default function StudioAnimation3D() {
  const title = "Studio d'animation 3D : nouveautés - Alex Chesnay";
  const description =
    "Actualités récentes de notre studio d'animation 3D et projets en cours.";
  const image = `${siteUrl}/assets/images/ProjetGateauxRendu1.jpg`;
  const url = `${siteUrl}/blog/studio-animation-3d`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
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
        <h1>Studio d'animation 3D : nouveautés</h1>
        <p>
          Notre studio d'animation 3D continue d'innover avec de nouveaux projets
          et collaborations. Découvrez un aperçu de nos dernières réalisations
          ci-dessous.
        </p>
        <img
          src="/assets/images/ProjetGateauxRendu1.jpg"
          alt="Exemple de rendu d'animation 3D d'un gâteau coloré"
          style={{ maxWidth: '100%', height: 'auto' }}
          loading="lazy"
          decoding="async"
          width={1841}
          height={1035}
        />
      </motion.main>
    </>
  );
}
