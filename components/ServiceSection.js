import Link from 'next/link';
import theme from '../styles/theme';
import FadeInSection from './FadeInSection';

export default function ServiceSection({ title, text, items, ctaText, ctaHref }) {
  return (
    <FadeInSection style={{ marginTop: theme.spacing.xl }}>
      <h2>{title}</h2>
      <p>{text}</p>
      <ul
        style={{
          margin: `${theme.spacing.md} 0`,
          paddingLeft: theme.spacing.lg,
        }}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className="contact-button"
        style={{ display: 'inline-block' }}
      >
        {ctaText}
      </Link>
    </FadeInSection>
  );
}
