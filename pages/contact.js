import Head from 'next/head';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import theme from '../styles/theme';

const ReCAPTCHA = dynamic(() => import('react-google-recaptcha'), { ssr: false });

const siteUrl = 'https://alex-chesnay.com';

export default function Contact() {
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      setStatus({ type: 'error', message: 'Veuillez valider le reCAPTCHA.' });
      return;
    }
    const formData = {
      'form-name': 'contact',
      ...form,
      'g-recaptcha-response': recaptchaToken,
    };
    try {
      const response = await fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        setStatus({ type: 'success', message: 'Message envoyé !' });
        setForm({ firstName: '', lastName: '', phone: '', email: '', message: '' });
        setRecaptchaToken(null);
        recaptchaRef.current?.reset();
      } else {
        setStatus({ type: 'error', message: 'Une erreur est survenue' });
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
        style={{ padding: theme.spacing.lg }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h1>Contactez notre studio d'animation 3D</h1>
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Ne pas remplir : <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
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
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
            onChange={setRecaptchaToken}
          />
          <button type="submit">Envoyer</button>
        </form>
        {status && (
          <p className={status.type === 'success' ? 'success' : 'error'}>
            {status.message}
          </p>
        )}
        <p className="rgpd-note">
          Les informations recueillies dans ce formulaire sont enregistrées pour permettre de vous recontacter. Consultez notre{' '}
          <a href="/politique-de-confidentialite">politique de confidentialité</a>.
        </p>
        <div className="map-wrapper">
          <div className="map-responsive">
            <iframe
              src="https://www.google.com/maps?q=75001+Paris&output=embed"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation 75001 Paris"
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
          form {
            display: flex;
            flex-direction: column;
            gap: ${theme.spacing.md};
            margin-top: ${theme.spacing.md};
          }
          label {
            margin-bottom: ${theme.spacing.xs};
          }
          input,
          textarea {
            width: 100%;
            padding: ${theme.spacing.sm};
            border: 1px solid ${theme.colors.grey500};
            border-radius: ${theme.radii.sm};
            background: ${theme.colors.white};
            color: ${theme.colors.text};
          }
          button {
            padding: ${theme.spacing.sm} ${theme.spacing.md};
            background: ${theme.colors.primary};
            color: ${theme.colors.white};
            border: none;
            border-radius: ${theme.radii.sm};
            cursor: pointer;
            margin-top: ${theme.spacing.md};
          }
          .map-wrapper {
            margin-top: ${theme.spacing.lg};
          }
          .map-responsive {
            position: relative;
            width: 100%;
            aspect-ratio: 16/9;
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
            margin-top: ${theme.spacing.md};
          }
          .rgpd-note {
            margin-top: ${theme.spacing.md};
            font-size: 0.875rem;
          }
        `}</style>
      </motion.main>
    </>
  );
}
