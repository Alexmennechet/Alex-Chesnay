import Head from 'next/head';
import HeroHeader from '../components/HeroHeader';
import theme from '../styles/theme';
import FadeInSection from '../components/FadeInSection';
import Link from 'next/link';
import Image from 'next/image';

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
        <HeroHeader
          baseline="Spécialiste 3D, VFX et réalité virtuelle"
          images={[
            {
              src: '/assets/images/PAGES_0_Couverture.jpg',
              alt: 'Visuel de couverture du portfolio 3D'
            },
            {
              src: '/assets/images/MENNECHET_Alex_Cognac_1.jpg',
              alt: 'Bouteille de cognac en 3D - vue 1'
            },
            {
              src: '/assets/images/MENNECHET_Alex_Cognac_2.jpg',
              alt: 'Bouteille de cognac en 3D - vue 2'
            }
          ]}
        />
        <FadeInSection style={{ padding: theme.spacing.lg }}>
          <h1>Accueil de notre studio d'animation 3D</h1>
          <p>
            Bienvenue sur le portfolio de notre studio d'animation 3D, dédié aux
            images de synthèse et effets visuels.
          </p>
        </FadeInSection>

          <section
            style={{ padding: theme.spacing.lg }}
            data-delay="0"
            data-duration="600"
          >
          <h2>En vedette</h2>
          <div className="responsive-grid">
            <Image
              src="/assets/images/MENNECHET_Alex_Cognac_1.jpg"
              alt="Projet 1"
              width={400}
              height={225}
              loading="lazy"
            />
            <Image
              src="/assets/images/MENNECHET_Alex_Cognac_2.jpg"
              alt="Projet 2"
              width={400}
              height={225}
              loading="lazy"
            />
            <Image
              src="/assets/images/MENNECHET_Alex_Cognac_3.jpg"
              alt="Projet 3"
              width={400}
              height={225}
              loading="lazy"
            />
          </div>
        </section>

          <section
            style={{ padding: theme.spacing.lg, backgroundColor: theme.colors.grey100 }}
            data-delay="0"
            data-duration="600"
          >
          <h2>Catégories</h2>
          <div className="responsive-grid">
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/assets/images/placeholder2.png"
                alt="Animation 3D"
                width={300}
                height={200}
                loading="lazy"
              />
              <p>Animation 3D</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/assets/images/placeholder3.png"
                alt="Effets visuels"
                width={300}
                height={200}
                loading="lazy"
              />
              <p>Effets visuels</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Image
                src="/assets/images/MontreMaisonEclatIA.jpg"
                alt="Réalité virtuelle"
                width={300}
                height={200}
                loading="lazy"
              />
              <p>Réalité virtuelle</p>
            </div>
          </div>
        </section>

          <section
            style={{ padding: theme.spacing.lg }}
            data-delay="0"
            data-duration="600"
          >
          <h2>Extrait blog</h2>
          <div className="responsive-grid">
            <article>
              <Image
                src="/assets/images/ProjetGateauxRendu1.jpg"
                alt="Article de blog"
                width={400}
                height={225}
                loading="lazy"
              />
              <h3>Créer des textures réalistes</h3>
              <p>Découvrez nos conseils pour des rendus gourmands.</p>
              <Link href="/blog">Lire plus</Link>
            </article>
          </div>
        </section>

          <section
            style={{ padding: theme.spacing.lg, textAlign: 'center', backgroundColor: theme.colors.grey200 }}
            data-delay="0"
            data-duration="600"
          >
          <Image
            src="/assets/images/MENNECHET_Alex_parfum_rendu1.jpg"
            alt="Contact"
            width={600}
            height={338}
            loading="lazy"
          />
          <h2>Prêt à démarrer votre projet ?</h2>
          <p>Contactez notre studio pour discuter de vos besoins.</p>
          <Link href="/contact/" className="btn-primary">
            Contact
          </Link>
        </section>
      </main>
    </>
  );
}
