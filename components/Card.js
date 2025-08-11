import styles from './Card.module.css';
import FadeInSection from './FadeInSection';

export default function Card({ children }) {
  return <FadeInSection className={styles.card}>{children}</FadeInSection>;
}
