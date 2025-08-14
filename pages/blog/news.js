import Breadcrumb from '../../components/Breadcrumb';
import BlogCard from '../../components/BlogCard';
import { getPostsByCategory } from '../../lib/blog';
import styles from './Category.module.css';

export default function BlogNews({ posts }) {
  return (
    <main className={styles.container}>
      <Breadcrumb
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: 'Actualités' }
        ]}
      />
      <h1>Actualités</h1>
      {posts.length > 0 ? (
        <div className={`${styles.grid} responsive-grid`}>
          {posts.map((p) => (
            <BlogCard key={p.slug} {...p} />
          ))}
        </div>
      ) : (
        <p>Les actualités seront publiées ici.</p>
      )}
    </main>
  );
}

export async function getStaticProps() {
  const posts = getPostsByCategory('news');
  return { props: { posts } };
}
