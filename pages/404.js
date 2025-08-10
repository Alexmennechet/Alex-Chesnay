import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Page non trouvée</title>
        <meta name="description" content="Page non trouvée – retour au portfolio d'Alex Chesnay." />
      </Head>
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Page non trouvée</h1>
      </main>
    </>
  );
}
