import Breadcrumb from '../../components/Breadcrumb';

export default function BlogTutorials() {
  return (
    <main style={{ padding: 'var(--space-lg)' }}>
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Tutoriels' }
        ]}
      />
      <h1>Tutoriels</h1>
      <p>Les tutoriels arriveront prochainement.</p>
    </main>
  );
}
