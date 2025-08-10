import theme from '../../styles/theme';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer
      className={styles.footer}
      style={{
        background: theme.colors.background,
        borderTop: `1px solid ${theme.colors.text}`,
        color: theme.colors.text,
        padding: theme.spacing.md
      }}
    >
      <div className={styles.content}>
        <a className={styles.phone} href="tel:0768563197">0768563197</a>
        <div className={styles.bottom}>
          <a className={styles.email} href="mailto:alex-mennechet@outlook.fr">alex-mennechet@outlook.fr</a>
          <ul className={styles.links}>
            <li>
              <a href="/mentions-legales">Mentions légales</a>
            </li>
            <li>
              <a href="/politique-de-confidentialite">Politique de confidentialité</a>
            </li>
          </ul>
          <ul className={styles.social}>
            <li><a href="https://www.instagram.com/alexchesnay" aria-label="Instagram" target="_blank" rel="noopener"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/alexchesnay" aria-label="LinkedIn" target="_blank" rel="noopener"><i className="fa-brands fa-linkedin-in"></i></a></li>
            <li><a href="https://www.artstation.com/alexchesnay" aria-label="ArtStation" target="_blank" rel="noopener"><i className="fa-brands fa-artstation"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
