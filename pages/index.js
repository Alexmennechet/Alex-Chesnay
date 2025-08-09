import HeroHeader from '../components/HeroHeader';
import theme from '../styles/theme';

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <section style={{ padding: theme.spacing.lg }}>
        <h1>Accueil</h1>
        <p>Bienvenue sur mon portfolio.</p>
      </section>
    </main>
  );
}
