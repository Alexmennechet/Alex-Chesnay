import { useRouter } from 'next/router';

export default function Project() {
  const { query } = useRouter();
  return (
    <main>
      <h1>Projet: {query.slug}</h1>
      <p>Contenu du projet {query.slug}.</p>
    </main>
  );
}
