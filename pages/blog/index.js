import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState } from 'react';
import theme from '../../styles/theme';
import BlogCard from '../../components/BlogCard';
import posts from '../../private/blog.json' assert { type: 'json' };
import Breadcrumb from '../../components/Breadcrumb';

const siteUrl = 'https://alex-chesnay.com';

export default function Blog() {
  const title = "Blog - Studio d'animation 3D Alex Chesnay";
  const description =
    "Actualités du studio d'animation 3D et articles récents.";
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/blog`;
  const [visibleCount, setVisibleCount] = useState(1);

  const loadMore = () => setVisibleCount((c) => c + 1);

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
            { label: 'Blog' }
          ]}
        />
        <h1>Blog du studio d'animation 3D</h1>
        <div className="responsive-grid">
          {posts.slice(0, visibleCount).map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </div>
        {visibleCount < posts.length && (
          <div style={{ textAlign: 'center', marginTop: theme.spacing.lg }}>
            <button onClick={loadMore} className="contact-button">
              Charger plus
            </button>
          </div>
        )}
      </motion.main>
    </>
  );
}
