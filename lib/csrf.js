import crypto from 'crypto';

export function generateSecret() {
  return crypto.randomBytes(32).toString('hex');
}

export function generateToken(secret) {
  return crypto
    .createHmac('sha256', secret)
    .update('csrf-token')
    .digest('hex');
}

export function verifyToken(secret, token) {
  const expected = generateToken(secret);
  try {
    return crypto.timingSafeEqual(
      Buffer.from(token),
      Buffer.from(expected)
    );
  } catch {
    return false;
  }
}
