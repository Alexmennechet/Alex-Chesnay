import Head from 'next/head';
import { motion } from 'framer-motion';
import theme from '../styles/theme';
import Breadcrumb from '../components/Breadcrumb';

const siteUrl = 'https://alex-chesnay.com';

export default function PolitiqueDeConfidentialite() {
  const title = 'Politique de confidentialité - Alex Chesnay';
  const description = "Informations sur la collecte, l\u2019utilisation et la conservation de vos donn\u00e9es.";
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/politique-de-confidentialite`;

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
            { label: 'Politique de confidentialité' }
          ]}
        />
        <h1>Politique de confidentialité</h1>
        <section style={{ margin: `${theme.spacing.lg} 0` }}>
          <h2>Données collectées</h2>
          <p>
            Nous collectons les informations que vous nous fournissez via les formulaires de
            contact et lors de votre navigation sur le site, telles que votre nom, votre
            adresse e-mail et toute autre donnée fournie volontairement.
          </p>
        </section>
        <section style={{ margin: `${theme.spacing.lg} 0` }}>
          <h2>Finalités</h2>
          <p>
            Les données recueillies sont utilisées pour répondre à vos demandes, améliorer nos
            services et assurer le bon fonctionnement du site.
          </p>
        </section>
        <section style={{ margin: `${theme.spacing.lg} 0` }}>
          <h2>Durée de conservation</h2>
          <p>
            Vos informations sont conservées pendant une durée maximale de trois ans à compter de
            votre dernier contact ou pour la durée nécessaire au respect des obligations
            légales.
          </p>
        </section>
        <section style={{ margin: `${theme.spacing.lg} 0` }}>
          <h2>Droits des utilisateurs</h2>
          <p>
            Vous disposez d'un droit d'accès, de rectification, d'opposition, d'effacement et de
            portabilité de vos données. Vous pouvez également demander la limitation du
            traitement.
          </p>
        </section>
        <section style={{ margin: `${theme.spacing.lg} 0` }}>
          <h2>Contact DPO</h2>
          <p>
            Pour toute question ou pour exercer vos droits, contactez notre délégué à la
            protection des données à l’adresse suivante :{' '}
            <a href="mailto:alex-mennechet@outlook.fr">
              alex-mennechet@outlook.fr
            </a>
            .
          </p>
        </section>
      </motion.main>
    </>
  );
}

