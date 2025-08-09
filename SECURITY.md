# Plan de sécurité et de maintenance

## HTTPS, TLS 1.3 et HSTS
- Utiliser un fournisseur comme Netlify ou Cloudflare pour servir le site en HTTPS.
- Activer la prise en charge de TLS 1.3 dans le tableau de bord du fournisseur.
- L'en‑tête `Strict-Transport-Security` est défini dans le fichier [`_headers`](./_headers) pour forcer les navigateurs à rester en HTTPS.

## Pare-feu applicatif (WAF) et protection anti-DDoS
- Activer un WAF et le mode anti-DDoS du fournisseur (ex. Cloudflare, AWS Shield).
- Configurer les règles pour bloquer les attaques courantes et limiter le trafic abusif.

## Sauvegardes quotidiennes chiffrées
- Le script [`scripts/backup.sh`](./scripts/backup.sh) crée une archive du dépôt, la chiffre en AES‑256 puis l'envoie sur un serveur externe.
- Exemple de planification quotidienne via cron :
  ```
  0 2 * * * BACKUP_PASS=motdepasse /chemin/vers/scripts/backup.sh
  ```
  où `BACKUP_PASS` définit la clé de chiffrement.

## Monitoring et maintenance trimestrielle
- Mettre en place un outil de supervision d'uptime (UptimeRobot, Uptime Kuma…) et un système de détection d'intrusion (Wazuh, Fail2ban…).
- Plan de maintenance tous les trimestres :
  - Mettre à jour les dépendances et appliquer les correctifs de sécurité.
  - Vérifier les journaux de monitoring et d'intrusion.
  - Tester la restauration des sauvegardes.
  - Lancer un scan de vulnérabilité.
