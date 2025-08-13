# Alex-Chesnay

Ce dépôt contient le code source du site [alexchesnay.fr](https://alexchesnay.fr) construit avec **Next.js**. 
L'ancienne version en HTML statique a été supprimée : toutes les pages doivent désormais être modifiées dans le répertoire `pages/` et les composants React correspondants. 

## Développement

1. Installer les dépendances : `npm install`.
2. Lancer le serveur de développement : `npm run dev`.
3. Construire la version de production : `npm run build`.
4. Netlify utilise `@netlify/plugin-nextjs` pour le déploiement, en publiant le dossier `.next`.

## Ajouter un projet

1. Ajouter les images du projet dans le dossier `assets/images`.
2. Éditer `private/projects.json` et ajouter un objet contenant les champs :
   - `slug`
   - `title`
   - `images` (tableau des chemins d'images)
   - `video` (URL de la vidéo intégrée)
   - `description`
   - `category`
3. La page du projet est générée automatiquement et l'entrée apparaît dans la galerie `/projects`.
4. Le bouton « Retour à la galerie » permet de revenir à la liste des projets.

## Déploiement

Les modifications poussées sur une branche déclenchent automatiquement un Deploy Preview sur Netlify. Vérifier que les checks "Header rules", "Redirect rules", "Pages changed" et "Deploy preview" passent au vert.

## Historique QA

Les branches sont testées avant fusion avec Lighthouse (Perf ≥90, A11y ≥95), le validateur W3C et des tests mobiles. Les résultats sont consignés ci‑dessous.

| Branche | Portée | Lighthouse (Perf/A11y) | Validateur W3C | Tests mobiles | Notes |
| --- | --- | --- | --- | --- | --- |
| `debug/pass-01` | Container & footer | – | – | – | Branches antérieures, résultats non archivés |
| `ui/pass-02` | Navigation & marquee | – | – | – | Branches antérieures, résultats non archivés |
| `perf-seo/pass-03` | WebP/srcset, metas, cache headers | Échec : npm 403 lors de Lighthouse | Échec : npm 403 lors du validateur | `npm test` : No tests specified | Dépendances manquantes, tests non exécutés |

