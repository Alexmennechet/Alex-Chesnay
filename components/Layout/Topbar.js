import Link from 'next/link';
import styles from './Topbar.module.css';
import theme from '../../styles/theme';

export default function Topbar() {
  return (
    <div
      className={styles.topbar}
      style={{
        background: theme.colors.text,
        color: theme.colors.white
      }}
    >
      <div className="container">
        <div className={styles.inner}>
          <ul className={styles.links}>
            <li>
              <a href="/rss.xml">RSS</a>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
          </ul>
          <ul className={styles.social} aria-label="R\u00e9seaux sociaux">
            <li>
              <a
                href="https://www.instagram.com/alexchesnay"
                aria-label="Instagram"
                target="_blank"
                rel="noopener"
              >
                <i className="fa-brands fa-instagram" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/alexchesnay"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener"
              >
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a
                href="https://www.artstation.com/alexchesnay"
                aria-label="ArtStation"
                target="_blank"
                rel="noopener"
              >
                <i className="fa-brands fa-artstation" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/alexchesnay"
                aria-label="Facebook"
                target="_blank"
                rel="noopener"
              >
                <i className="fa-brands fa-facebook-f" />
              </a>
            </li>
            <li>
              <a
                href="https://vimeo.com/alexchesnay"
                aria-label="Vimeo"
                target="_blank"
                rel="noopener"
              >
                <i className="fa-brands fa-vimeo-v" />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/alexchesnay"
                aria-label="X (formerly Twitter)"
                target="_blank"
                rel="noopener"
              >
                <i className="fa-brands fa-x-twitter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
