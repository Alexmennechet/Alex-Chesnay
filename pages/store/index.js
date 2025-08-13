import Breadcrumb from '../../components/Breadcrumb';
import Card from '../../components/Card';
import Link from 'next/link';

export default function StoreIndex() {
  const products = [
    {
      slug: 'roller-derby-girl',
      title: 'RollerDerbyGirl',
      description: 'Modèle 3D dynamique d’une athlète de roller derby.',
      image: '/assets/images/placeholder2.png'
    },
    {
      slug: 'facial-modeling-timelapse',
      title: 'Facial Modeling Timelapse',
      description: 'Timelapse de la création d’un modèle facial.',
      image: '/assets/images/placeholder3.png'
    }
  ];

  return (
    <main style={{ padding: 'var(--space-lg)' }}>
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Boutique' }
        ]}
      />
      <h1>Boutique</h1>
      <section className="card-grid">
        {products.map((product) => (
          <Card key={product.slug}>
            <img src={product.image} alt={product.title} width="640" height="360" />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <Link href={`/store/${product.slug}`}>Voir le produit</Link>
          </Card>
        ))}
      </section>
    </main>
  );
}
