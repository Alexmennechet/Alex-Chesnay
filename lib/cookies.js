export function parseCookies(cookieHeader = '') {
  return cookieHeader
    .split(';')
    .reduce((acc, part) => {
      const [key, ...v] = part.trim().split('=');
      if (!key) return acc;
      acc[key] = decodeURIComponent(v.join('='));
      return acc;
    }, {});
}
