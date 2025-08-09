# Alex-Chesnay

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
