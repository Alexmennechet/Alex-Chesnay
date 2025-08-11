# Style Tokens

Les composants utilisent des **tokens** définis dans `styles/theme.js` et exposés en CSS via `styles/globals.css`.

## Couleurs
- `--color-primary` : bleu principal (`#007A9A`)
- `--color-background` : fond clair (`#f8f9fa`)
- `--color-text` : texte par défaut (`#111827`)
- `--color-white` : blanc (`#ffffff`)

## Espacements
- `--space-xs` : 0.5rem
- `--space-sm` : 0.75rem
- `--space-md` : 1rem
- `--space-lg` : 1.5rem
- `--space-xl` : 3.75rem (décalage du header)

## Rayons et ombres
- `--radius-sm` : 4px
- `--shadow-sm` : ombre légère `0 1px 2px rgba(0,0,0,0.05)`

## Typographie
`theme.fontSizes` fournit les tailles `h1`, `h2`, `h3` et `body`.

Utilisez `theme` dans les composants React et les variables CSS dans les fichiers `.css` pour rester cohérent.
