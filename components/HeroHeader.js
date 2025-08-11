import { useEffect, useRef } from 'react';
import theme from '../styles/theme';

export default function HeroHeader({
  title = "Studio d'animation 3D – Mon Portfolio",
  baseline,
  backgroundImage = '/assets/images/PAGES_0_Couverture.jpg'
}) {
  const ref = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (ref.current) {
        const offset = window.pageYOffset;
        ref.current.style.backgroundPositionY = `${offset * 0.5}px`;
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      ref={ref}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: theme.colors.primary,
        fontFamily: theme.fonts.heading,
        marginBottom: theme.spacing.lg
      }}
    >
      <h1>{title}</h1>
      {baseline && (
        <p style={{ fontFamily: theme.fonts.body }}>{baseline}</p>
      )}
    </header>
  );
}
