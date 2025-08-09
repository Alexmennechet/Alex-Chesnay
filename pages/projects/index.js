import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export default function Projects({ projects }) {
  return (
    <main>
      <h1>Galerie</h1>
      <ul>
        {projects.map((p) => (
          <li key={p.slug}>
            <Link href={`/projects/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  const projects = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return { props: { projects } };
}
