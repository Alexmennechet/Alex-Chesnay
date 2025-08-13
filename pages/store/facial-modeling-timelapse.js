import Breadcrumb from '../../components/Breadcrumb';
import Card from '../../components/Card';

export default function FacialModelingTimelapse() {
  return (
    <main style={{ padding: 'var(--space-lg)' }}>
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Boutique', href: '/store' },
          { label: 'Facial Modeling Timelapse' }
        ]}
      />
      <h1>Facial Modeling Timelapse</h1>
      <Card>
        <img src="/assets/images/placeholder3.png" alt="Facial Modeling Timelapse" width="640" height="360" />
        <p>Timelapse de la création d’un modèle facial.</p>
      </Card>
    </main>
  );
}
