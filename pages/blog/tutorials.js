import Breadcrumb from '../../components/Breadcrumb';
import BlogCard from '../../components/BlogCard';
import { getPostsByCategory } from '../../lib/blog';
import styles from './Category.module.css';

export default function BlogTutorials({ posts }) {
  return (
    <main className={styles.container}>
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Tutoriels' }
        ]}
      />
      <h1>Tutoriels</h1>
      {posts.length > 0 ? (
        <div className={`${styles.grid} responsive-grid`}>
          {posts.map((p) => (
            <BlogCard key={p.slug} {...p} />
          ))}
        </div>
      ) : (
        <p>Les tutoriels arriveront prochainement.</p>
      )}
    </main>
  );
}

export async function getStaticProps() {
  const posts = getPostsByCategory('tutorials');
  return { props: { posts } };
}
