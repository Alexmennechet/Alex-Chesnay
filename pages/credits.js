import Head from 'next/head';
import { motion } from 'framer-motion';

const siteUrl = 'https://alex-chesnay.com';

const mediaCredits = [
  { file: '/assets/images/MENNECHET_Alex_Cognac_1.jpg', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/MENNECHET_Alex_Cognac_2.jpg', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/MENNECHET_Alex_Cognac_3.jpg', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/MENNECHET_Alex_parfum_rendu1.jpg', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/MontreMaisonEclatIA.jpg', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/ProjetGateauxRendu1.jpg', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/PAGES_0_Couverture.jpg', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/placeholder2.png', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/placeholder3.png', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/project1.png', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/project2.png', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/project3.png', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/project4.png', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/project5.png', source: 'Alex Chesnay', license: 'Tous droits réservés' },
  { file: '/assets/images/project6.png', source: 'Alex Chesnay', license: 'Tous droits réservés' }
];

export default function Credits() {
  const title = 'Crédits - Alex Chesnay';
  const description = 'Sources et licences des médias utilisés sur le site.';
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/credits`;

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
        <h1>Crédits</h1>
        <p>Liste des images utilisées sur ce site avec leur source et licence.</p>
        <ul>
          {mediaCredits.map((media) => (
            <li key={media.file}>
              <strong>{media.file}</strong> — Source : {media.source}, Licence : {media.license}
            </li>
          ))}
        </ul>
      </motion.main>
    </>
  );
}

