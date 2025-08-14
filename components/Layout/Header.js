import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import theme from '../../styles/theme';
import projects from '../../private/projects.json' assert { type: 'json' };

const storeMenu = [
  { slug: '', title: 'Boutique' },
  { slug: 'prints', title: 'Prints' },
  { slug: 'downloads', title: 'Downloads' }
];

const blogMenu = [
  { slug: '', title: 'Tous les articles' },
  { slug: 'news', title: 'Actualités' },
  { slug: 'tutorials', title: 'Tutoriels' }
];
import Topbar from './Topbar';

export default function Header() {
  const { asPath } = useRouter();
  const [projectsOpen, setProjectsOpen] = useState(asPath.startsWith('/projets'));
  const [storeOpen, setStoreOpen] = useState(asPath.startsWith('/store'));
  const [blogOpen, setBlogOpen] = useState(asPath.startsWith('/blog'));
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Topbar />
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        style={{
          background: theme.colors.background,
          borderBottom: `1px solid ${theme.colors.text}`,
          color: theme.colors.text,
          padding: 'var(--space-md) 0'
        }}
      >
        <div className="container">
        <nav>
          <div className={styles['nav-inner']}>
            <Link
              href="/"
              aria-current={asPath === '/' ? 'page' : undefined}
              className={styles.logo}
            >
              Alex Chesnay
            </Link>
            <button
              className={`${styles.burger} ${menuOpen ? styles.open : ''}`}
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
            </button>
            <div className={`${styles['nav-scroll']} ${menuOpen ? styles.open : ''}`}>
              <ul className={styles['main-menu']}>
                <li>
                  <Link
                    href="/"
                    className={`${styles.navLink} ${asPath === '/' ? styles.active : ''}`}
                  >
                    Accueil
                  </Link>
                </li>
                <li>
                  <details
                    className={styles.dropdown}
                    open={projectsOpen}
                    onToggle={(e) => setProjectsOpen(e.target.open)}
                  >
                    <summary
                      aria-haspopup="menu"
                      aria-expanded={projectsOpen}
                      className={`${styles.navLink} ${
                        asPath.startsWith('/projets') ? styles.active : ''
                      }`}
                    >
                      Projets
                    </summary>
                    <ul className={styles.dropdownMenu} role="menu">
                      {projects.map((project) => (
                        <li key={project.slug} role="none">
                          <Link
                            href={`/projets/${project.slug}`}
                            className={`${styles.navLink} ${
                              asPath === `/projets/${project.slug}` ? styles.active : ''
                            }`}
                            role="menuitem"
                          >
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
                <li>
                  <Link
                    href="/services/"
                    className={`${styles.navLink} ${
                      asPath.startsWith('/services') ? styles.active : ''
                    }`}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/a-propos"
                    className={`${styles.navLink} ${
                      asPath === '/a-propos' ? styles.active : ''
                    }`}
                  >
                    À propos
                  </Link>
                </li>
                <li>
                  <details
                    className={styles.dropdown}
                    open={storeOpen}
                    onToggle={(e) => setStoreOpen(e.target.open)}
                  >
                    <summary
                      aria-haspopup="menu"
                      aria-expanded={storeOpen}
                      className={`${styles.navLink} ${
                        asPath.startsWith('/store') ? styles.active : ''
                      }`}
                    >
                      Store
                    </summary>
                    <ul className={styles.dropdownMenu} role="menu">
                      {storeMenu.map((item) => {
                        const path = item.slug ? `/store/${item.slug}` : '/store';
                        return (
                          <li key={item.slug || 'index'} role="none">
                            <Link
                              href={item.slug ? `/store/${item.slug}/` : '/store/'}
                              className={`${styles.navLink} ${
                                asPath === path ? styles.active : ''
                              }`}
                              role="menuitem"
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
                <li>
                  <details
                    className={styles.dropdown}
                    open={blogOpen}
                    onToggle={(e) => setBlogOpen(e.target.open)}
                  >
                    <summary
                      aria-haspopup="menu"
                      aria-expanded={blogOpen}
                      className={`${styles.navLink} ${
                        asPath.startsWith('/blog') ? styles.active : ''
                      }`}
                    >
                      Blog
                    </summary>
                    <ul className={styles.dropdownMenu} role="menu">
                      {blogMenu.map((item) => {
                        const path = item.slug ? `/blog/${item.slug}` : '/blog';
                        return (
                          <li key={item.slug || 'index'} role="none">
                            <Link
                              href={item.slug ? `/blog/${item.slug}/` : '/blog/'}
                              className={`${styles.navLink} ${
                                asPath === path ? styles.active : ''
                              }`}
                              role="menuitem"
                            >
                              {item.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
              </ul>
            </div>
            <Link
              href="/contact/"
              aria-current={asPath === '/contact' ? 'page' : undefined}
              className={`${styles.navLink} ${styles['contact-cta']} ${
                asPath === '/contact' ? styles.active : ''
              }`}
              style={{ background: theme.colors.cyan, color: theme.colors.white }}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  </>
  );
}
