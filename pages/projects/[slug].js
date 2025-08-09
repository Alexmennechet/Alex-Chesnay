import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({ project }) {
  return (
    <main>
      <h1>{project.title}</h1>
      <div>
        {project.images.map((img, idx) => (
          <Image
            key={idx}
            src={img}
            alt={`${project.title} image ${idx + 1}`}
            width={800}
            height={600}
          />
        ))}
      </div>
      <div>
        <iframe
          src={project.video}
          title={project.title}
          allowFullScreen
          style={{ width: '100%', height: '400px' }}
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
