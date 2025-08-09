import fs from 'fs';
import path from 'path';
import Link from 'next/link';

export default function Project({ project }) {
  return (
    <main>
      <h1>{project.title}</h1>
      <div className="responsive-grid">
        {project.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            srcSet={`${img} 480w, ${img} 800w`}
            sizes="(max-width: 600px) 100vw, 50vw"
            alt={`${project.title} image ${idx + 1}`}
            loading="lazy"
            decoding="async"
          />
        ))}
      </div>
      <div className="video-wrapper">
        <iframe
          src={project.video}
          title={project.title}
          allowFullScreen
        />
      </div>
      <p>{project.description}</p>
      <Link href="/projects"><button>Retour à la galerie</button></Link>
    </main>
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
