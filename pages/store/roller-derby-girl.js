import Breadcrumb from '../../components/Breadcrumb';
import Card from '../../components/Card';

export default function RollerDerbyGirl() {
  return (
    <main style={{ padding: 'var(--space-lg)' }}>
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Boutique', href: '/store' },
          { label: 'RollerDerbyGirl' }
        ]}
      />
      <h1>RollerDerbyGirl</h1>
      <Card>
        <img src="/assets/images/placeholder2.png" alt="RollerDerbyGirl" width="640" height="360" />
        <p>Modèle 3D dynamique d’une athlète de roller derby.</p>
      </Card>
    </main>
  );
}
