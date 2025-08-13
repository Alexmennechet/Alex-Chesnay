import Head from 'next/head';
import { motion } from 'framer-motion';
import theme from '../../../styles/theme';
import Breadcrumb from '../../../components/Breadcrumb';
import BlogCard from '../../../components/BlogCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getPostsByCategory, getCategories } from '../../../lib/blog';

const siteUrl = 'https://alex-chesnay.com';

const POSTS_PER_PAGE = 6;

export default function BlogCategoryPage({ category, posts }) {
  const router = useRouter();
  const page = parseInt(router.query.page || '1', 10);
  const title = `${category} - Blog - Studio d'animation 3D Alex Chesnay`;
  const description = `Articles de la catégorie ${category}.`;
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/blog/${category}`;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (page - 1) * POSTS_PER_PAGE;
  const paginatedPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="canonical" href={url} />
      </Head>
      <motion.main
        style={{ padding: theme.spacing.lg }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: category }
          ]}
        />
        <h1>{category}</h1>
        <div className="responsive-grid">
          {paginatedPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
        <nav className="pagination">
          {page > 1 && (
            <Link href={`/blog/${category}?page=${page - 1}`}>Précédent</Link>
          )}
          {page < totalPages && (
            <Link href={`/blog/${category}?page=${page + 1}`}>Suivant</Link>
          )}
        </nav>
      </motion.main>
    </>
  );
}

export async function getStaticPaths() {
  const categories = getCategories();
  const paths = categories.map((category) => ({ params: { category } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filtered = getPostsByCategory(params.category);
  return { props: { category: params.category, posts: filtered } };
}

