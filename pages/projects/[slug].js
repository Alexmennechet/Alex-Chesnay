import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import theme from '../../styles/theme';
import Breadcrumb from '../../components/Breadcrumb';
import Gallery from '../../components/Gallery';

const siteUrl = 'https://alex-chesnay.com';
const imageSizes = {
  '/assets/images/project1.png': { width: 1536, height: 1024 },
  '/assets/images/project2.png': { width: 1536, height: 1024 },
  '/assets/images/project3.png': { width: 1024, height: 1536 },
  '/assets/images/project4.png': { width: 1536, height: 1024 }
};

export default function Project({ project, prev, next }) {
  const url = `${siteUrl}/projets/${project.slug}.html`;
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
        <header className="project-hero">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: 'Projets', href: '/projets/' },
              { label: project.title }
            ]}
          />
          <h1>{project.title}</h1>
          <img
            className="hero-media"
            src={project.images[0]}
            srcSet={`${project.images[0]} 480w, ${project.images[0]} 800w`}
            sizes="100vw"
            alt={project.imageAlts?.[0] || `${project.title} couverture`}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width={imageSizes[project.images[0]]?.width || 800}
            height={imageSizes[project.images[0]]?.height || 600}
          />
        </header>
        <div className="project-content" style={{ padding: theme.spacing.lg }}>
          <section className="pitch">
            <p>{project.description}</p>
          </section>

          {(project.workDone ||
            project.software ||
            project.charDesigner ||
            project.production ||
            project.year) && (
            <section className="project-meta" style={{ margin: `${theme.spacing.lg} 0` }}>
              <dl>
                {project.workDone && (
                  <>
                    <dt>Work&nbsp;Done</dt>
                    <dd>{project.workDone}</dd>
                  </>
                )}
                {project.software && (
                  <>
                    <dt>Software</dt>
                    <dd>{project.software}</dd>
                  </>
                )}
                {project.charDesigner && (
                  <>
                    <dt>Char.&nbsp;Designer</dt>
                    <dd>
                      {project.charDesignerLink ? (
                        <a href={project.charDesignerLink}>{project.charDesigner}</a>
                      ) : (
                        project.charDesigner
                      )}
                    </dd>
                  </>
                )}
                {project.production && (
                  <>
                    <dt>Production</dt>
                    <dd>{project.production}</dd>
                  </>
                )}
                {project.year && (
                  <>
                    <dt>Year</dt>
                    <dd>{project.year}</dd>
                  </>
                )}
              </dl>
            </section>
          )}

          <section className="role" style={{ margin: `${theme.spacing.lg} 0` }}>
            <h2>Rôle</h2>
            <p>{project.role}</p>
          </section>

          <section className="tools" style={{ margin: `${theme.spacing.lg} 0` }}>
            <h2>Outils</h2>
            <ul>
              {project.tools.split(',').map((tool) => (
                <li key={tool.trim()}>{tool.trim()}</li>
              ))}
            </ul>
          </section>

          <section className="gallery" style={{ margin: `${theme.spacing.lg} 0` }}>
            <h2>Galerie</h2>
            <Gallery
              images={project.images}
              alts={project.imageAlts}
              sizes={imageSizes}
              layout="two-columns"
            />
          </section>

          <section className="cta" style={{ margin: `${theme.spacing.lg} 0` }}>
            <h2>Intéressé ?</h2>
            <a className="contact-button" href="mailto:alex-mennechet@outlook.fr">
              Contactez-nous
            </a>
          </section>

          <Link className="back-link" href="/projets/">
            Retour à la galerie
          </Link>
        </div>

        <nav className="project-nav">
          {prev ? (
            <Link
              className="prev"
              href={`/projets/${prev.slug}.html`}
              aria-label="Projet précédent"
            >
              Projet précédent
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              className="next"
              href={`/projets/${next.slug}.html`}
              aria-label="Projet suivant"
            >
              Projet suivant
            </Link>
          ) : (
            <span />
          )}
        </nav>
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
  const index = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[index];
  const prev = projects[index - 1] || null;
  const next = projects[index + 1] || null;
  return { props: { project, prev, next } };
}
