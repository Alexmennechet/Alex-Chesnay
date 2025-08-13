import Breadcrumb from '../../components/Breadcrumb';

export default function StoreDownloads() {
  return (
    <main style={{ padding: 'var(--space-lg)' }}>
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Boutique', href: '/store' },
          { label: 'Downloads' }
        ]}
      />
      <h1>Downloads</h1>
      <p>Les fichiers téléchargeables seront disponibles ici.</p>
    </main>
  );
}
