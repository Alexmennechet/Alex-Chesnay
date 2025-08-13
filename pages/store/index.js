import Breadcrumb from '../../components/Breadcrumb';

export default function StoreIndex() {
  return (
    <main style={{ padding: 'var(--space-lg)' }}>
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Boutique' }
        ]}
      />
      <h1>Boutique</h1>
      <p>Contenu de la boutique à venir.</p>
    </main>
  );
}
