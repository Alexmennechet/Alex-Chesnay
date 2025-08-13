import Breadcrumb from '../../components/Breadcrumb';
import Card from '../../components/Card';
import Link from 'next/link';

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
        <div
          className="image-grid"
          style={{
            display: 'grid',
            gap: 'var(--space-md)',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
          }}
        >
          <img
            src="/assets/images/placeholder3.png"
            alt="Timelapse étape 1"
            width="640"
            height="360"
          />
          <img
            src="/assets/images/placeholder2.png"
            alt="Timelapse étape 2"
            width="640"
            height="360"
          />
        </div>
        <p>
          Vidéo en accéléré montrant chaque étape de la création d’un visage
          3D, du blocage initial aux détails fins.
        </p>
        <h2>Détails techniques</h2>
        <ul>
          <li>Format : .mp4</li>
          <li>Résolution : 1920x1080</li>
          <li>Durée : 3 minutes</li>
          <li>Licence : usage personnel et commercial</li>
        </ul>
        <a
          href="https://gumroad.com/l/facial-modeling-timelapse"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            padding: '0.75rem 1.5rem',
            background: 'var(--color-primary)',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '4px',
            marginTop: 'var(--space-md)'
          }}
        >
          GET IT NOW
        </a>
      </Card>
      <section style={{ marginTop: 'var(--space-xl)' }}>
        <h2>Autres modèles disponibles</h2>
        <ul>
          <li>
            <Link href="/store/roller-derby-girl">Roller Derby Girl</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
