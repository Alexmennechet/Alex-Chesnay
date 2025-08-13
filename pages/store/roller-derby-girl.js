import Breadcrumb from '../../components/Breadcrumb';
import Card from '../../components/Card';
import Link from 'next/link';

export default function RollerDerbyGirl() {
  return (
    <main style={{ padding: 'var(--space-lg)' }}>
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Boutique', href: '/store' },
          { label: 'Roller Derby Girl' }
        ]}
      />
      <h1>Roller Derby Girl</h1>
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
            src="/assets/images/placeholder2.png"
            alt="Roller Derby Girl pose 1"
            width="640"
            height="360"
          />
          <img
            src="/assets/images/placeholder3.png"
            alt="Roller Derby Girl pose 2"
            width="640"
            height="360"
          />
        </div>
        <p>
          Modèle 3D dynamique d’une athlète de roller derby prêt à intégrer vos
          scènes ou jeux. Comprend textures et rig de base pour des poses
          rapides.
        </p>
        <h2>Détails techniques</h2>
        <ul>
          <li>Formats : .fbx, .obj, .blend</li>
          <li>Textures 4K incluses (PNG)</li>
          <li>Licence : usage personnel et commercial</li>
        </ul>
        <a
          href="https://gumroad.com/l/roller-derby-girl"
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
            <Link href="/store/facial-modeling-timelapse">
              Facial Modeling Timelapse
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

