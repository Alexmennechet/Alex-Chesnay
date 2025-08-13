import fs from 'fs';
import path from 'path';

/**
 * Load and validate blog posts from the JSON file.
 * Ensures each post contains the required keys.
 * @returns {Array<Object>} list of posts
 */
export function getAllPosts() {
  const filePath = path.join(process.cwd(), 'private', 'blog.json');
  const raw = fs.readFileSync(filePath, 'utf8');
  const posts = JSON.parse(raw);
  validatePosts(posts);
  return posts;
}

const requiredKeys = [
  'slug',
  'title',
  'description',
  'excerpt',
  'date',
  'category',
  'image',
  'content'
];

function validatePosts(posts) {
  if (!Array.isArray(posts)) {
    throw new Error('Blog data must be an array of posts');
  }
  posts.forEach((post, index) => {
    requiredKeys.forEach((key) => {
      if (typeof post[key] !== 'string' || post[key].length === 0) {
        throw new Error(`Post at index ${index} is missing required field: ${key}`);
      }
    });
  });
}

export function getPostBySlug(slug) {
  const posts = getAllPosts();
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category) {
  const posts = getAllPosts();
  return posts.filter((p) => p.category === category);
}

export function getCategories() {
  const posts = getAllPosts();
  return Array.from(new Set(posts.map((p) => p.category)));
}
