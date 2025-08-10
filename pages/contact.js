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
  const title = "Contact - Studio d'animation 3D Alex Chesnay";
  const description = "Contactez notre studio d'animation 3D via email.";
  const image = `${siteUrl}/assets/images/PAGES_0_Couverture.jpg`;
  const url = `${siteUrl}/contact`;

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(null);
  const recaptchaRef = useRef(null);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
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
      setStatus({
        type: 'error',
        message: 'Veuillez accepter les cookies pour envoyer le formulaire.',
      });
      return;
    }
    if (!recaptchaToken) {
      setStatus({ type: 'error', message: 'Veuillez valider le reCAPTCHA.' });
      return;
    }
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, recaptchaToken, csrfToken }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ type: 'success', message: 'Message envoyé !' });
        setForm({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          message: '',
        });
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Une erreur est survenue',
        });
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
        <h1>Contactez notre studio d'animation 3D</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Prénom</label>
            <input
              id="firstName"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Nom</label>
            <input
              id="lastName"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Téléphone</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="^[0-9+\s-]{10,}$"
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
              onChange={setRecaptchaToken}
            />
          )}
        </form>
        <div className="map-wrapper">
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps?q=75001+Paris&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="contact-details">
            <p>Adresse : 75001 Paris</p>
            <p>
              Téléphone : <a href="tel:+33768563197">07 68 56 31 97</a>
            </p>
            <p>
              Email : <a href="mailto:alex-mennechet@outlook.fr">alex-mennechet@outlook.fr</a>
            </p>
          </div>
        </div>
        <style jsx>{`
          .map-wrapper {
            margin-top: 2rem;
          }
          .map-responsive {
            position: relative;
            padding-bottom: 56.25%;
            height: 0;
            overflow: hidden;
          }
          .map-responsive iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }
          .contact-details {
            margin-top: 1rem;
          }
        `}</style>
        {status && (
          <p className={status.type === 'success' ? 'success' : 'error'}>
            {status.message}
          </p>
        )}
      </motion.main>
    </>
  );
}
