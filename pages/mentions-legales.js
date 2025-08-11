import Head from 'next/head';
import { motion } from 'framer-motion';
import theme from '../styles/theme';

const siteUrl = 'https://alex-chesnay.com';

export default function MentionsLegales() {
  const title = 'Mentions légales - Alex Chesnay';
  const description = 'Informations légales du site.';
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/mentions-legales`;

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
        <h1>Mentions légales</h1>
        <section style={{ margin: `${theme.spacing.lg} 0` }}>
          <h2>Éditeur du site</h2>
          <p>Alex Chesnay</p>
        </section>
        <section style={{ margin: `${theme.spacing.lg} 0` }}>
          <h2>Siège social</h2>
          <p>10 rue de la Liberté, 75000 Paris, France</p>
        </section>
        <section style={{ margin: `${theme.spacing.lg} 0` }}>
          <h2>Directeur de publication</h2>
          <p>Alex Chesnay</p>
        </section>
        <section style={{ margin: `${theme.spacing.lg} 0` }}>
          <h2>Hébergeur</h2>
          <p>
            Vercel Inc.<br />
            340 S Lemon Ave #4133<br />
            Walnut, CA 91789<br />
            États-Unis
          </p>
        </section>
        <section style={{ margin: `${theme.spacing.lg} 0` }}>
          <h2>Numéro SIREN / SIRET</h2>
          <p>123&nbsp;456&nbsp;789&nbsp;00000</p>
        </section>
        <section style={{ margin: `${theme.spacing.lg} 0` }}>
          <h2>Contact</h2>
          <p>
            <a href="mailto:alex-mennechet@outlook.fr">
              alex-mennechet@outlook.fr
            </a>
          </p>
        </section>
        </motion.main>
    </>
  );
}
