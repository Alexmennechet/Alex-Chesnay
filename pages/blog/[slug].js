import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Breadcrumb from '../../components/Breadcrumb';
import BlogCard from '../../components/BlogCard';
import styles from './Post.module.css';
import { getAllPosts, getPostBySlug } from '../../lib/blog';

const siteUrl = 'https://alex-chesnay.com';

export default function BlogPost({ post, prevPost, nextPost, relatedPosts }) {
  const url = `${siteUrl}/blog/${post.slug}`;
  const image = `${siteUrl}${post.image}`;
  const title = `${post.title} - Alex Chesnay`;
  const description = post.description;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <link rel="canonical" href={url} />
      </Head>
      <motion.main
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Breadcrumb
          items={[
            { label: 'Accueil', href: '/' },
            { label: 'Blog', href: '/blog/' },
            { label: post.category, href: `/blog/${post.category}` },
            { label: post.title }
          ]}
        />
        <h1>{post.title}</h1>
        <div className="post-meta">
          <time dateTime={post.date}>{post.date}</time>
          {' • '}
          <Link href={`/blog/${post.category}`}>{post.category}</Link>
        </div>
        <article
          className="post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <nav className={styles.navigation}>
          {prevPost && (
            <Link href={`/blog/${prevPost.slug}`}>{`← ${prevPost.title}`}</Link>
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`}>{`${nextPost.title} →`}</Link>
          )}
        </nav>
          {relatedPosts.length > 0 && (
            <section
              className={styles.related}
              data-delay="0"
              data-duration="600"
            >
            <h2>Articles similaires</h2>
            <div className={`${styles.grid} responsive-grid`}>
              {relatedPosts.map((p) => (
                <BlogCard key={p.slug} {...p} />
              ))}
            </div>
          </section>
        )}
      </motion.main>
    </>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const posts = getAllPosts().sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  const index = posts.findIndex((p) => p.slug === params.slug);
  const prevPost = index > 0 ? posts[index - 1] : null;
  const nextPost = index < posts.length - 1 ? posts[index + 1] : null;
  const relatedPosts = posts
    .filter(
      (p) => p.category === post.category && p.slug !== post.slug
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);
  return { props: { post, prevPost, nextPost, relatedPosts } };
}
