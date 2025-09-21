"""
Identification de Faille de sécu
-----------------------------------------------------
MISSION : Identifiez les failles de sécurité dans ce script

Ce script gère l'authentification et l'accès aux fichiers utilisateur.
Analysez le code et identifiez les problèmes de sécurité.
"""

import os
import hashlib

def hash_password(password):
    """
    Hash un mot de passe
    """
    return hashlib.md5(password.encode()).hexdigest()

def authenticate_user(username, password):
    """
    Authentifie un utilisateur
    """
    users_db = {
        "admin": "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8",
        "user1": "ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f",
        "guest": "35454b055cc325ea1af2126e27707052"
    }
    
    hashed_password = hash_password(password)
    
    if username in users_db and users_db[username] == hashed_password:
        return True
    return False

def get_user_file(username, filename):
    """
    Récupère un fichier utilisateur
    """
    base_path = f"/var/files/{username}/"
    file_path = base_path + filename
    
    try:
        with open(file_path, 'r') as f:
            return f.read()
    except FileNotFoundError:
        return "Fichier non trouvé"
    except Exception as e:
        return f"Erreur: {e}"

def access_file(username, password, filename):
    """
    Accède à un fichier après authentification
    """
    if authenticate_user(username, password):
        return get_user_file(username, filename)
    else:
        return "Authentification échouée"

# Test du système
result = access_file("admin", "password", "document.txt")

# ============================================================
# VOTRE ANALYSE DE SÉCURITÉ
# ============================================================
#
# Quelles sont les failles de sécurité dans ce code ?
# 
# FAILLE 1 :
# 
# 
# FAILLE 2 :
# 
# 
# IMPACT POTENTIEL :
# 
# 
# COMMENT CORRIGER :
#