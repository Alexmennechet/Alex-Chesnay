import Head from 'next/head';
import { motion } from 'framer-motion';
import theme from '../../../styles/theme';
import Breadcrumb from '../../../components/Breadcrumb';
import BlogCard from '../../../components/BlogCard';
import { getPostsByCategory, getCategories } from '../../../lib/blog';

const siteUrl = 'https://alex-chesnay.com';

export default function BlogCategoryPage({ category, posts }) {
  const title = `${category} - Blog - Studio d'animation 3D Alex Chesnay`;
  const description = `Articles de la catégorie ${category}.`;
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/blog/${category}`;

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
          {posts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
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

