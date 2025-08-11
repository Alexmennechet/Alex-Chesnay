import Head from 'next/head';
import HeroHeader from '../components/HeroHeader';
import theme from '../styles/theme';
import FadeInSection from '../components/FadeInSection';
import Link from 'next/link';

const siteUrl = 'https://alex-chesnay.com';

export default function Home() {
  const title = "Studio d'animation 3D - Alex Chesnay Portfolio";
  const description =
    "Portfolio du studio d'animation 3D d'Alex Chesnay, spécialiste 3D, VFX et réalité virtuelle.";
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
          <Link href="/contact/" className="contact-button">
            Contactez-nous
          </Link>
          <Link href="/projets/" className="contact-button" style={{ marginLeft: theme.spacing.md }}>
            Voir nos réalisations
          </Link>
        </div>
        <FadeInSection style={{ padding: theme.spacing.lg }}>
          <h1>Accueil de notre studio d'animation 3D</h1>
          <p>
            Bienvenue sur le portfolio de notre studio d'animation 3D, dédié aux
            images de synthèse et effets visuels.
          </p>
        </FadeInSection>
      </main>
    </>
  );
}
