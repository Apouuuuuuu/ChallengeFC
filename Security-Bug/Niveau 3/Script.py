"""
Identification de Faille de sécu
-----------------------------------------------------
MISSION : Identifiez les failles de sécurité dans ce script

Ce script gère un système de token JWT pour l'API et l'upload de fichiers.
Analysez le code et identifiez les problèmes de sécurité.
"""

import jwt
import os
import json
import base64
from datetime import datetime, timedelta

class UserSession:
    def __init__(self, user_id, role, permissions):
        self.user_id = user_id
        self.role = role
        self.permissions = permissions
        self.created_at = datetime.now()
    
    def to_dict(self):
        return {
            'user_id': self.user_id,
            'role': self.role,
            'permissions': self.permissions,
            'created_at': self.created_at.isoformat()
        }

def generate_token(user_id, role):
    """
    Génère un token JWT pour l'utilisateur
    """
    payload = {
        'user_id': user_id,
        'role': role,
        'exp': datetime.utcnow() + timedelta(hours=24)
    }
    
    secret_key = "mysecretkey123"
    token = jwt.encode(payload, secret_key, algorithm='HS256')
    return token

def verify_token(token):
    """
    Vérifie la validité d'un token JWT
    """
    try:
        secret_key = "mysecretkey123"
        payload = jwt.decode(token, secret_key, algorithms=['HS256', 'none'])
        return payload
    except jwt.ExpiredSignatureError:
        return None
    except jwt.InvalidTokenError:
        return None

def save_user_session(session_data):
    """
    Sauvegarde la session utilisateur
    """
    session_file = f"/tmp/session_{session_data.user_id}.json"
    with open(session_file, 'w') as f:
        json.dump(session_data.to_dict(), f)

def load_user_session(user_id):
    """
    Charge la session utilisateur
    """
    session_file = f"/tmp/session_{user_id}.json"
    try:
        with open(session_file, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        return None

def process_file_upload(filename, file_data):
    """
    Traite l'upload d'un fichier
    """
    allowed_extensions = ['.txt', '.pdf', '.jpg', '.png']
    
    if any(filename.endswith(ext) for ext in allowed_extensions):
        upload_path = f"/uploads/{filename}"
        
        decoded_data = base64.b64decode(file_data)
        
        with open(upload_path, 'wb') as f:
            f.write(decoded_data)
        
        return f"Fichier {filename} uploadé avec succès"
    else:
        return "Extension de fichier non autorisée"

def admin_function(token, action, data):
    """
    Fonction d'administration
    """
    payload = verify_token(token)
    
    if payload and payload.get('role') == 'admin':
        if action == "save_session":
            session_data = json.loads(base64.b64decode(data))
            session_obj = UserSession(session_data['user_id'], session_data['role'], session_data['permissions'])
            save_user_session(session_obj)
            return "Session sauvegardée"
        elif action == "upload_file":
            filename, file_data = data.split(':', 1)
            return process_file_upload(filename, file_data)
    
    return "Accès refusé"

# Test du système
token = generate_token("user123", "admin")
result = admin_function(token, "upload_file", "document.txt:SGVsbG8gV29ybGQ=")

# ============================================================
# VOTRE ANALYSE DE SÉCURITÉ
# ============================================================
#
# Identifiez les 3 failles de sécurité principales dans ce code :
# 
# FAILLE 1 :
# 
# 
# FAILLE 2 :
# 
# 
# FAILLE 3 :
# 
# 
# IMPACT POTENTIEL :
# 
# 
# COMMENT CORRIGER :
#