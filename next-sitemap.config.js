export default {
  siteUrl: 'https://alex-chesnay.com',
  generateRobotsTxt: true,
  additionalPaths: async (config) => [
    await config.transform(config, '/politique-de-confidentialite'),
  ],
};
