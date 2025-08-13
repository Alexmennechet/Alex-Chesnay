import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import theme from '../../styles/theme';
import Breadcrumb from '../../components/Breadcrumb';

const siteUrl = 'https://alex-chesnay.com';
const imageSizes = {
  '/assets/images/project1.png': { width: 1536, height: 1024 },
  '/assets/images/project2.png': { width: 1536, height: 1024 },
  '/assets/images/project3.png': { width: 1024, height: 1536 },
  '/assets/images/project4.png': { width: 1536, height: 1024 }
};

export default function Projects({ projects }) {
  const categories = [
    'Tous',
    ...Array.from(new Set(projects.map((p) => p.category)))
  ];
  const [filter, setFilter] = useState('Tous');
  const filteredProjects =
    filter === 'Tous' ? projects : projects.filter((p) => p.category === filter);

  const title = "Projets - Studio d'animation 3D Alex Chesnay";
  const description =
    'Galerie des projets de notre studio d\'animation 3D.';
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/projects`;

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
      <main style={{ padding: theme.spacing.lg }}>
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Projets' }
          ]}
        />
        <h1>Galerie de notre studio d'animation 3D</h1>
        <nav
          className="project-filters"
          style={{ margin: `${theme.spacing.lg} 0` }}
        >
          <ul
            style={{
              listStyle: 'none',
              display: 'flex',
              gap: theme.spacing.sm,
              padding: 0
            }}
          >
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => setFilter(cat)}
                  style={{
                    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                    border: `1px solid ${theme.colors.primary}`,
                    borderRadius: '4px',
                    background:
                      filter === cat ? theme.colors.primary : 'transparent',
                    color:
                      filter === cat
                        ? theme.colors.background
                        : theme.colors.primary,
                    cursor: 'pointer'
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <section id="projects" className="project-gallery">
          <div className="grid">
            {filteredProjects.map((p) => {
              const size = imageSizes[p.images[0]] || { width: 800, height: 600 };
              return (
                <Link
                  key={p.slug}
                    href={`/projets/${p.slug}.html`}
                  className="project-card"
                  data-category={p.category}
                  data-title={p.title}
                >
                  <img
                    src={p.images[0]}
                    alt={p.imageAlts ? p.imageAlts[0] : p.title}
                    className="project-img"
                    loading="lazy"
                    decoding="async"
                    width={size.width}
                    height={size.height}
                  />
                </Link>
              );
            })}
          </div>
        </section>
        <div style={{ textAlign: 'center', marginTop: theme.spacing.lg }}>
          <Link href="/contact" className="contact-button">
            Nous contacter
          </Link>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'private', 'projects.json');
  const projects = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { projects } };
}
