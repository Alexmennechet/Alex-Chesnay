import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';
import { generateSecret, generateToken } from '../lib/csrf.js';

const siteUrl = 'https://alex-chesnay.com';

export async function getServerSideProps({ res }) {
  const secret = generateSecret();
  const token = generateToken(secret);
  res.setHeader(
    'Set-Cookie',
    `csrfSecret=${secret}; HttpOnly; Path=/; SameSite=Strict`
  );
  return { props: { csrfToken: token } };
}

export default function Contact({ csrfToken }) {
  const title = 'Contact - Alex Chesnay';
  const description = 'Contactez-moi via email.';
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/contact`;

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const recaptchaRef = useRef(null);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent');
      setHasConsent(consent === 'accepted');
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!hasConsent) {
      setStatus({ type: 'error', message: 'Veuillez accepter les cookies pour envoyer le formulaire.' });
      return;
    }
    try {
      const recaptchaToken = await recaptchaRef.current.executeAsync();
      recaptchaRef.current.reset();
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, recaptchaToken, csrfToken }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: 'Message envoyé !' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Une erreur est survenue' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Une erreur est survenue' });
    }
  };

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
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nom</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <input type="hidden" name="csrfToken" value={csrfToken} />
          <button type="submit">Envoyer</button>
          {hasConsent && (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              size="invisible"
            />
          )}
        </form>
        {status && (
          <p className={status.type === 'success' ? 'success' : 'error'}>
            {status.message}
          </p>
        )}
      </motion.main>
    </>
  );
}
