import Head from 'next/head';
import HeroHeader from '../components/HeroHeader';
import theme from '../styles/theme';
import { motion } from 'framer-motion';
import Link from 'next/link';

const siteUrl = 'https://alex-chesnay.com';

export default function Home() {
  const title = 'Alex Chesnay Portfolio';
  const description = "Portfolio d'Alex Chesnay, spécialiste 3D, VFX et réalité virtuelle.";
  const image = `${siteUrl}/assets/images/ProjetGateauxRendu1.jpg`;
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
        <div style={{ textAlign: 'center', marginBottom: theme.spacing.lg }}>
          <Link href="/contact" className="contact-button">
            Contactez-nous
          </Link>
          <Link href="/projects" className="contact-button" style={{ marginLeft: theme.spacing.md }}>
            Voir nos réalisations
          </Link>
        </div>
        <div className="video-wrapper" style={{ marginBottom: theme.spacing.lg }}>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Vidéo de démonstration"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
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
