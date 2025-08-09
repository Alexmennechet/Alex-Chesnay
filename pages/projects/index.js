import Link from 'next/link';

const projects = [
  { slug: 'alpha', title: 'Projet Alpha' },
  { slug: 'beta', title: 'Projet Beta' }
];

export default function Projects() {
  return (
    <main>
      <h1>Galerie</h1>
      <ul>
        {projects.map(p => (
          <li key={p.slug}>
            <Link href={`/projects/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
