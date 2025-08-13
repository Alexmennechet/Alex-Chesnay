import Breadcrumb from '../../components/Breadcrumb';

export default function StorePrints() {
  return (
    <main style={{ padding: 'var(--space-lg)' }}>
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Boutique', href: '/store' },
          { label: 'Prints' }
        ]}
      />
      <h1>Prints</h1>
      <p>Cette page présentera les impressions disponibles.</p>
    </main>
  );
}
