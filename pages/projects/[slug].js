import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import theme from '../../styles/theme';

const siteUrl = 'https://alex-chesnay.com';

export default function Project({ project }) {
  const url = `${siteUrl}/projects/${project.slug}`;
  const image = `${siteUrl}${project.images[0]}`;
  const title = `${project.title} - Projet - Alex Chesnay`;
  const description = project.description;

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'CreativeWork',
              name: project.title,
              description: project.description,
              image: project.images.map((img) => `${siteUrl}${img}`),
              url,
            }),
          }}
        />
      </Head>
      <main>
        <header
          style={{
            backgroundImage: `url(${project.images[0]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: theme.colors.primary,
            fontFamily: theme.fonts.heading,
            marginBottom: theme.spacing.lg,
          }}
        >
          <h1>{project.title}</h1>
        </header>
        <section style={{ padding: theme.spacing.lg }}>
          <div className="responsive-grid">
            {project.images.map((img, idx) => (
              <Zoom key={idx}>
                <img
                  src={img}
                  srcSet={`${img} 480w, ${img} 800w`}
                  sizes="(max-width: 600px) 100vw, 50vw"
                  alt={`${project.title} illustration ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </Zoom>
            ))}
          </div>
          <section style={{ margin: `${theme.spacing.lg} 0` }}>
            <h2>Making-of</h2>
            <div className="video-wrapper">
              <iframe
                src={project.video}
                title={`${project.title} making-of`}
                allowFullScreen
              />
            </div>
          </section>
          <section style={{ margin: `${theme.spacing.lg} 0` }}>
            <h2>Fiche technique</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>
                <strong>Outils :</strong> {project.tools}
              </li>
              <li>
                <strong>Durée :</strong> {project.duration}
              </li>
              <li>
                <strong>Rôle :</strong> {project.role}
              </li>
            </ul>
          </section>
          <p>{project.description}</p>
          <Link href="/projects">
            <button>Retour à la galerie</button>
          </Link>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'private', 'projects.json');
  const projects = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const paths = projects.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'private', 'projects.json');
  const projects = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const project = projects.find((p) => p.slug === params.slug);
  return { props: { project } };
}
