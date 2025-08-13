import theme from '../styles/theme';

export default function FreeModels() {
  return (
    <section className="free-models" style={{ margin: `${theme.spacing.lg} 0`, textAlign: 'center' }}>
      <h2>Modèles gratuits</h2>
      <p>Découvrez notre collection de modèles 3D gratuits pour vos projets.</p>
      <a
        className="btn-primary"
        href="https://alex-chesnay.com/free-models"
      >
        Voir l'offre
      </a>
    </section>
  );
}
