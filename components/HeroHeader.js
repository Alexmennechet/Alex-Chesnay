import { useEffect, useRef } from 'react';
import theme from '../styles/theme';

export default function HeroHeader() {
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
        className="container"
        ref={ref}
        style={{
        backgroundImage: 'url(/assets/images/PAGES_0_Couverture.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colors.primary,
        fontFamily: theme.fonts.heading,
        marginBottom: theme.spacing.lg
      }}
    >
      <h1>Mon Portfolio</h1>
    </header>
  );
}
