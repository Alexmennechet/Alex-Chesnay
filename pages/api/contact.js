import nodemailer from 'nodemailer';
import validator from 'validator';
import fs from 'fs';
import path from 'path';

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

  const { name, email, message, token } = req.body;

  if (!name || !email || !message || !token) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Email invalide." });
  }

    const cleanName = validator.escape(name.trim());
    const cleanEmail = validator.normalizeEmail(email);
    const cleanMessage = validator.escape(message.trim());

    const recap = await verifyRecaptcha(token);
    if (!recap.success) {
    return res.status(400).json({ error: 'Échec de la vérification reCAPTCHA.' });
    }

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const suspicious = /https?:\/\//i.test(cleanMessage);
    const logLine = `${new Date().toISOString()} | IP: ${ip} | Suspicious: ${suspicious} | Name: ${cleanName} | Email: ${cleanEmail} | Message: ${cleanMessage}\n`;
    const logFile = path.join(process.cwd(), 'private', 'contact-submissions.log');
    try {
    await fs.promises.appendFile(logFile, logLine);
    } catch (err) {
    console.error('Failed to log submission', err);
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
