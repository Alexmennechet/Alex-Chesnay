# Alex-Chesnay

Portfolio réalisé avec Next.js.

## Structure du projet
- `assets/` – ressources statiques (images)
- `components/` – composants React
- `pages/` – routes Next.js
- `styles/` – styles globaux et thème
- `private/projects.json` – données des projets
- `_headers` – configuration des en-têtes HTTP et du cache
- `_redirects` – règles de redirection
- `netlify.toml` – configuration Netlify

## Ajouter un projet
1. Ajouter les images du projet dans le dossier `assets/images`.
2. Éditer `private/projects.json` et ajouter un objet contenant :
   - `slug`
   - `title`
   - `images` (tableau des chemins d'images)
   - `video` (URL de la vidéo intégrée)
   - `description`
   - `category`
3. La page du projet est générée automatiquement et l'entrée apparaît dans la galerie `/projects`.
4. *(Optionnel)* Lancer `npm run build` pour vérifier la génération.
5. Le bouton « Retour à la galerie » permet de revenir à la liste des projets.

## Build
La commande `npm run build` compile le site dans le dossier `.next`.

## Déploiement & configuration
- Le déploiement continu est géré par Netlify via `netlify.toml`.
- Netlify active automatiquement HTTPS et une redirection HTTP→HTTPS est définie.
- Les en-têtes de sécurité (`Referrer-Policy`, `Content-Security-Policy`) et la mise en cache longue durée des assets (`Cache-Control: public, max-age=31536000, immutable` pour `/assets/*`) sont définis dans `_headers`.

## Guide rapide pour les développeurs

### Installation
```bash
npm install
```

### Scripts
- `npm run dev` : serveur de développement
- `npm run build` : build de production
- `npm start` : exécute le build
- `npm run lint` : analyse du code

### Conventions
- Messages de commit clairs en style impératif
- Exécuter `npm run lint` avant de pousser
- Respecter la structure Next.js (composants en PascalCase, etc.)
