import nodemailer from 'nodemailer';
import validator from 'validator';
import { verifyToken } from '../../lib/csrf.js';
import { parseCookies } from '../../lib/cookies.js';

async function verifyRecaptcha(token) {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${encodeURIComponent(secret)}&response=${encodeURIComponent(token)}`,
  });
  return res.json();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message, recaptchaToken, csrfToken } = req.body;

  if (!name || !email || !message || !recaptchaToken || !csrfToken) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email invalide." });
  }

  if (
    validator.contains(name, '<') ||
    validator.contains(name, '>') ||
    validator.contains(message, '<') ||
    validator.contains(message, '>')
  ) {
    return res.status(400).json({ error: 'Contenu invalide.' });
  }

  const cleanName = validator.escape(name.trim());
  const cleanEmail = validator.normalizeEmail(email);
  const cleanMessage = validator.escape(message.trim());

  const cookies = parseCookies(req.headers.cookie || '');
  const secret = cookies['csrfSecret'];
  if (!secret || !verifyToken(secret, csrfToken)) {
    return res.status(403).json({ error: 'Jeton CSRF invalide.' });
  }

  const recap = await verifyRecaptcha(recaptchaToken);
  if (!recap.success) {
    return res.status(400).json({ error: 'Échec de la vérification reCAPTCHA.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || cleanEmail,
      to: process.env.SMTP_TO,
      subject: 'Nouveau message de contact',
      text: `Nom: ${cleanName}\nEmail: ${cleanEmail}\nMessage: ${cleanMessage}`,
    });

    return res.status(200).json({ message: 'Message envoyé.' });
  } catch (err) {
    return res.status(500).json({ error: "Échec de l'envoi du message." });
  }
}
