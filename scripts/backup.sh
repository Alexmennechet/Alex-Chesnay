#!/bin/bash
# Encrypt and transfer a backup of the repository to a remote server.
# Usage: BACKUP_PASS=yourpassword ./backup.sh
set -euo pipefail

REPO_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DATE="$(date +%F)"
ARCHIVE="/tmp/alex-chesnay-$DATE.tar.gz"
ENCRYPTED="${ARCHIVE}.enc"
REMOTE_USER="backup"
REMOTE_HOST="backup.example.com"
REMOTE_DIR="/var/backups/alex-chesnay"

# Create compressed archive
 tar -czf "$ARCHIVE" -C "$REPO_DIR" .

# Encrypt archive using AES-256
 openssl enc -aes-256-cbc -pbkdf2 -salt -pass env:BACKUP_PASS -in "$ARCHIVE" -out "$ENCRYPTED"
 rm "$ARCHIVE"

# Transfer to remote server (requires SSH key or passwordless setup)
 scp "$ENCRYPTED" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR/"
 rm "$ENCRYPTED"
