import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import theme from '../styles/theme';

export default function HeroHeader({
  title = "Studio d'animation 3D – Mon Portfolio",
  baseline,
  images = [
    {
      src: '/assets/images/PAGES_0_Couverture.jpg',
      alt: 'Image de couverture du portfolio'
    }
  ]
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(
        () => setIndex((i) => (i + 1) % images.length),
        5000
      );
      return () => clearInterval(interval);
    }
  }, [images.length]);

  return (
    <header
      style={{
        position: 'relative',
        minHeight: 'clamp(400px, 60vh, 600px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: theme.colors.primary,
        fontFamily: theme.fonts.heading,
        marginBottom: theme.spacing.lg,
        overflow: 'hidden'
      }}
    >
      {images.map((image, i) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          priority={i === 0}
          loading="lazy"
          style={{
            objectFit: 'cover',
            zIndex: -1,
            opacity: i === index ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}
      <h1>{title}</h1>
      {baseline && (
        <p className="hero-tagline">{baseline}</p>
      )}
      <div style={{ marginTop: theme.spacing.md }}>
        <Link href="/projets/" className="btn-primary">
          Voir nos réalisations
        </Link>
        <Link
          href="/contact/"
          className="btn-primary"
          style={{ marginLeft: theme.spacing.md }}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
