import Head from 'next/head';
import { motion } from 'framer-motion';

const siteUrl = 'https://alex-chesnay.com';

export default function APropos() {
  const title = 'À propos - Alex Chesnay';
  const description = "Présentation de l'équipe, de notre histoire et de nos valeurs.";
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/a-propos`;

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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1>À propos</h1>
        <section>
          <h2>L'équipe</h2>
          <p>
            Notre équipe réunit des spécialistes passionnés de modélisation,
            d'animation et de VFX. Chaque membre apporte son expertise pour
            donner vie à vos projets.
          </p>
        </section>
        <section>
          <h2>Historique</h2>
          <p>
            Depuis nos débuts, nous accompagnons studios et agences dans la
            réalisation de visuels innovants. Notre expérience nous permet de
            relever des défis toujours plus ambitieux.
          </p>
        </section>
        <section>
          <h2>Nos valeurs</h2>
          <p>
            Créativité, exigence et écoute sont au cœur de notre démarche. Nous
            plaçons la collaboration et la satisfaction client au centre de
            chaque projet.
          </p>
        </section>
      </motion.main>
    </>
  );
}
