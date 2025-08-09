import Head from 'next/head';

const siteUrl = 'https://alex-chesnay.com';

export default function About() {
  const title = 'À propos - Alex Chesnay';
  const description = 'Quelques informations sur moi.';
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/about`;

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
      <main>
        <h1>À propos</h1>
        <p>Quelques informations sur moi.</p>
      </main>
    </>
  );
}
