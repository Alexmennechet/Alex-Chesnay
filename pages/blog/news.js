import Breadcrumb from '../../components/Breadcrumb';

export default function BlogNews() {
  return (
    <main style={{ padding: 'var(--space-lg)' }}>
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Actualités' }
        ]}
      />
      <h1>Actualités</h1>
      <p>Les actualités seront publiées ici.</p>
    </main>
  );
}
